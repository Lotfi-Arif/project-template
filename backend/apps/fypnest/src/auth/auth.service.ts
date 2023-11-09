import {
  Injectable,
  Logger,
  ConflictException,
  UnauthorizedException,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Auth } from '@app/prisma-generated/generated/nestgraphql/auth/auth.model';
import { v4 as uuid } from 'uuid';
import { ConfigService } from '@nestjs/config';
import { Prisma } from '@prisma/client';
import { handlePrismaError } from '@app/common/utils';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  /**
   * Registers a user.
   * @param authCreateInput - Data to create the auth with.
   * @returns The Auth object with details of the created user.
   */
  async register(
    authCreateInput: Prisma.AuthCreateArgs,
  ): Promise<{ accessToken: string; refreshToken: string; user: Auth }> {
    try {
      this.logger.log('Registering a new user');

      const existingAuth = await this.prisma.auth.findUnique({
        where: { email: authCreateInput.data.email },
      });
      if (existingAuth) {
        throw new ConflictException('Email already in use');
      }

      const hashedPassword = await bcrypt.hash(
        authCreateInput.data.password,
        10,
      );

      const userCreationResult = await this.prisma.user.create({
        data: {
          auth: {
            create: {
              email: authCreateInput.data.email,
              password: hashedPassword,
            },
          },
        },
        include: {
          auth: true, // Include the auth object
        },
      });

      // Additional check for user creation result
      if (!userCreationResult || !userCreationResult.auth) {
        throw new InternalServerErrorException('User registration failed');
      }

      // Now that the user is created, generate tokens
      const tokens = await this.generateTokens(
        userCreationResult.id,
        authCreateInput.data.email,
      );

      return {
        user: userCreationResult.auth, // Ensure this matches the Auth type structure
        ...tokens,
      };
    } catch (error) {
      this.logger.error(
        `Failed to register user with email: ${authCreateInput.data.email}`,
        error.stack,
      );
      handlePrismaError(error, 'Failed to register user with email provided');
    }
  }

  /**
   * Authenticates a user.
   * @param email - User's email.
   * @param password - User's password.
   * @returns JWT token string if successful.
   */
  async login(
    email: string,
    password: string,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    try {
      this.logger.log(`Authenticating user with email: ${email}`);

      const auth = await this.prisma.auth.findUnique({
        where: { email },
      });

      if (!auth || !(await bcrypt.compare(password, auth.password))) {
        throw new UnauthorizedException('Invalid credentials');
      }

      const user = await this.prisma.user.findUnique({
        where: { id: auth.userId },
      });

      if (!user) {
        this.logger.error(`User not found for auth ID: ${auth.id}`);
        throw new NotFoundException('User not found');
      }

      // Use generateTokens method to create both access and refresh tokens.
      const { accessToken, refreshToken } = await this.generateTokens(
        user.id,
        auth.email,
      );

      // Check if the refresh token should be hashed or not before saving
      const refreshTokenHash = this.configService.get<boolean>(
        'REFRESH_TOKEN_HASHED',
      )
        ? await bcrypt.hash(refreshToken, 10)
        : refreshToken;

      await this.prisma.auth.update({
        where: { id: auth.id },
        data: { refreshToken: refreshTokenHash },
      });

      // Return the plain refresh token if it is not hashed, otherwise return a message
      return this.configService.get<boolean>('REFRESH_TOKEN_HASHED')
        ? { accessToken, refreshToken: 'Refresh token updated successfully.' }
        : { accessToken, refreshToken };
    } catch (error) {
      this.logger.error(
        `Failed to authenticate user with email: ${email}`,
        error.stack,
      );
      handlePrismaError(error, 'Authenticating user failed');
    }
  }

  /**
   * Generates a new JWT and refresh token for a user.
   * @param userId - The user's unique identifier.
   * @param email - The user's email.
   * @returns An object containing both the JWT and refresh token.
   */
  async generateTokens(userId: string, email: string) {
    try {
      const accessToken = await this.jwtService.signAsync(
        { userId, email },
        { expiresIn: '15m' }, // Access token expires in 15 minutes
      );

      const refreshToken = await this.jwtService.signAsync(
        { userId, email },
        {
          secret: this.configService.get('JWT_REFRESH_SECRET'), // Secret for refresh token
          expiresIn: '7d', // Refresh token expires in 7 days
        },
      );

      // Store the hashed version of the JWT refresh token for added security
      const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);

      await this.prisma.auth.update({
        where: { userId },
        data: { refreshToken: hashedRefreshToken },
      });

      return { accessToken, refreshToken };
    } catch (error) {
      this.logger.error(`Failed to generate tokens for user ID: ${userId}`);
      handlePrismaError(error, 'Failed to generate tokens for user');
    }
  }

  /**
   * Refreshes the access token.
   * @param userId - The user's unique identifier.
   * @param token - The refresh token.
   * @returns A new JWT token.
   */
  async refreshToken(userId: string, token: string): Promise<string> {
    try {
      const auth = await this.prisma.auth.findUnique({ where: { userId } });

      if (!auth) {
        throw new UnauthorizedException('Authentication record not found');
      }

      const refreshTokenValid = await bcrypt.compare(token, auth.refreshToken);
      if (!refreshTokenValid) {
        throw new UnauthorizedException('Invalid refresh token');
      }

      // If the refresh token is valid, generate a new access token
      const accessToken = await this.jwtService.signAsync(
        { userId, email: auth.email },
        { expiresIn: '15m' },
      );

      return accessToken;
    } catch (error) {
      this.logger.error(`Failed to refresh token for user ID: ${userId}`);
      handlePrismaError(error, 'Failed to refresh token for user');
    }
  }

  /**
   * Initiates a password reset for the user.
   * @param email - The user's email.
   * @returns A unique password reset token.
   */
  async initiatePasswordReset(email: string): Promise<string> {
    try {
      // Find the user by email
      const auth = await this.prisma.auth.findUnique({ where: { email } });

      if (!auth) {
        throw new UnauthorizedException('Email does not exist');
      }

      // Generate a password reset token
      const passwordResetToken = uuid();

      // Update the Prisma record
      await this.prisma.auth.update({
        where: { email },
        data: {
          passwordResetToken,
          passwordResetExpires: new Date(Date.now() + 3600000), // 1 hour from now
        },
      });

      // Ensure you return a safe message instead of the actual token
      // The actual token should be sent via email
      return 'If an account with that email exists, a password reset link will be sent.';
    } catch (error) {
      this.logger.error(
        `Failed to initiate password reset for email: ${email}`,
        error.stack,
      );
      handlePrismaError(error, 'Failed to initiate password reset');
    }
  }

  /**
   * Completes the password reset process for a user.
   * @param token - The password reset token.
   * @param newPassword - The new password.
   * @returns A success message.
   */
  async completePasswordReset(
    token: string,
    newPassword: string,
  ): Promise<string> {
    try {
      // Find the user by password reset token
      const auth = await this.prisma.auth.findFirst({
        where: {
          passwordResetToken: token,
          passwordResetExpires: {
            gt: new Date(),
          },
        },
      });

      if (!auth) {
        this.logger.warn(`Invalid or expired password reset token: ${token}`);
        throw new NotFoundException('Invalid or expired password reset token');
      }

      // Hash the new password
      const hashedPassword = await bcrypt.hash(newPassword, 10);

      // Update the user's password, clear the reset token and expiry
      await this.prisma.auth.update({
        where: { id: auth.id },
        data: {
          password: hashedPassword,
          passwordResetToken: null,
          passwordResetExpires: null,
        },
      });

      return 'Password has been reset successfully';
    } catch (error) {
      this.logger.error(`Failed to complete password reset`, error.stack);
      handlePrismaError(error, 'Failed to complete password reset');
    }
  }
}
