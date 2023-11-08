import {
  Injectable,
  Logger,
  ConflictException,
  UnauthorizedException,
  InternalServerErrorException,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Auth } from '@app/prisma-generated/generated/nestgraphql/auth/auth.model';
import { v4 as uuid } from 'uuid';
import { ConfigService } from '@nestjs/config';
import { Prisma } from '@prisma/client';

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
          // ... other user details
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
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('Email already in use');
      }
      this.logger.error(
        `Failed to register user with email: ${authCreateInput.data.email}`,
        error.stack,
      );
      throw new InternalServerErrorException('Registration failed');
    }
  }

  /**
   * Authenticates a user.
   * @param email - User's email.
   * @param password - User's password.
   * @returns JWT token string if successful.
   */
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

      // No need to update the Auth entry with the access token, so we only update the refresh token.
      await this.prisma.auth.update({
        where: { id: auth.id },
        data: { refreshToken: await bcrypt.hash(refreshToken, 10) },
      });

      return {
        accessToken,
        refreshToken, // Assuming this is the plain refresh token, not hashed
      };
    } catch (error) {
      if (
        error instanceof UnauthorizedException ||
        error instanceof NotFoundException
      ) {
        throw error;
      }
      this.logger.error(
        `Failed to authenticate user with email: ${email}`,
        error.stack,
      );
      throw new InternalServerErrorException('Authentication failed');
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
      if (error instanceof BadRequestException) {
        throw error;
      }
      this.logger.error(
        `Failed to generate tokens for user ID: ${userId}`,
        error.stack,
      );
      throw new InternalServerErrorException('Token generation failed');
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
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      this.logger.error(
        `Failed to refresh token for user ID: ${userId}`,
        error.stack,
      );
      throw new InternalServerErrorException('Token refresh failed');
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

      // TODO: Integrate with an email service to send the token
      // Send the password reset token to the user's email

      return passwordResetToken;
    } catch (error) {
      if (
        error instanceof UnauthorizedException ||
        error instanceof ConflictException
      ) {
        throw error;
      }
      this.logger.error(
        `Failed to initiate password reset for email: ${email}`,
        error.stack,
      );
      throw new InternalServerErrorException(
        'Failed to initiate password reset',
      );
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
      if (error instanceof NotFoundException) {
        throw error; // This is already a domain-meaningful exception
      }
      this.logger.error('Failed to complete password reset', error.stack);
      throw new InternalServerErrorException(
        'Failed to complete password reset',
      );
    }
  }
}
