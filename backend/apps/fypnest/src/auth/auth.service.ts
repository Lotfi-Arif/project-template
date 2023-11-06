import {
  Injectable,
  Logger,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AuthCreateInput } from '@app/prisma-generated/generated/nestgraphql/auth/auth-create.input';
import { Auth } from '@app/prisma-generated/generated/nestgraphql/auth/auth.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  /**
   * Registers a user.
   * @param authCreateInput - Data to create the auth with.
   * @returns The Auth object with details of the created user.
   */
  async register(
    authCreateInput: AuthCreateInput,
  ): Promise<{ user: Auth; refreshToken: string }> {
    this.logger.log('Registering a new user');

    // Check if the user already exists
    const existingAuth = await this.prisma.auth.findUnique({
      where: { email: authCreateInput.email },
    });
    if (existingAuth) {
      throw new ConflictException('Email already in use');
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(authCreateInput.password, 10);

    // Generate a new refresh token
    const refreshToken = uuid(); // Generate the actual refresh token to send to the client

    // Hash the refresh token for security before saving
    const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);

    // Create the user and auth records with the hashed refresh token
    const user = await this.prisma.user.create({
      data: {
        auth: {
          create: {
            email: authCreateInput.email,
            password: hashedPassword,
            refreshToken: hashedRefreshToken, // Store the hashed refresh token
          },
        },
      },
      include: {
        auth: true,
      },
    });

    // Prepare the response object with the unhashed refresh token
    const response = {
      user: user.auth,
      refreshToken, // Send the actual refresh token (not hashed)
    };

    // Return the response object, which includes the actual refresh token
    return response;
  }

  /**
   * Authenticates a user.
   * @param email - User's email.
   * @param password - User's password.
   * @returns JWT token string if successful.
   */
  async login(email: string, password: string): Promise<string> {
    this.logger.log(`Authenticating user with email: ${email}`);

    // Find the authentication record that matches the email
    const auth = await this.prisma.auth.findUnique({
      where: { email },
    });

    // If no authentication record is found, or the password does not match, throw an error
    if (!auth || !(await bcrypt.compare(password, auth.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // If a valid auth record is found, get the user associated with this auth
    const user = await this.prisma.user.findUnique({
      where: { id: auth.userId },
    });

    // If no user is associated with the auth record, throw an error (should not happen in a consistent database)
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    // Create the JWT payload using the user's email and id
    const payload = { email: auth.email, userId: user.id };

    // Sign the JWT token and return it
    return this.jwtService.sign(payload);
  }

  /**
   * Generates a new JWT and refresh token for a user.
   * @param userId - The user's unique identifier.
   * @returns An object containing both the JWT and refresh token.
   */
  async generateTokens(userId: string, email: string) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          userId,
          email,
        },
        {
          expiresIn: '15m', // Expires in 15 minutes, for example
        },
      ),
      uuid(), // Use UUID or any other strategy for refresh tokens
    ]);

    // Save the refresh token with the user's auth record
    await this.prisma.auth.update({
      where: { userId },
      data: { refreshToken },
    });

    return { accessToken, refreshToken };
  }

  /**
   * Refreshes the access token.
   * @param userId - The user's unique identifier.
   * @param refreshToken - The refresh token.
   * @returns A new JWT token.
   */
  async refreshToken(userId: string, refreshToken: string): Promise<string> {
    // Validate the refresh token
    const auth = await this.prisma.auth.findUnique({ where: { userId } });

    if (!auth || auth.refreshToken !== refreshToken) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    // Generate a new access token
    const accessToken = await this.jwtService.signAsync(
      {
        userId,
        email: auth.email,
      },
      {
        expiresIn: '15m',
      },
    );

    return accessToken;
  }

  /**
   * Initiates a password reset for the user.
   * @param email - The user's email.
   * @returns A unique password reset token.
   */
  async initiatePasswordReset(email: string): Promise<string> {
    // Find the user by email
    const auth = await this.prisma.auth.findUnique({ where: { email } });

    if (!auth) {
      throw new UnauthorizedException('Email does not exist');
    }

    // Generate a password reset token (could be UUID or any other secure token)
    const passwordResetToken = uuid();

    // Update the Prisma record
    await this.prisma.auth.update({
      where: { email },
      data: {
        passwordResetToken,
        passwordResetExpires: new Date(Date.now() + 3600000), // 1 hour from now
      },
    });

    // TODO: should integrate with an email service to send the token
    // Send the password reset token to the user's email

    return passwordResetToken;
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
      throw new UnauthorizedException(
        'Invalid or expired password reset token',
      );
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
  }
}
