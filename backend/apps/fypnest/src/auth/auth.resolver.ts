import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Logger } from '@nestjs/common';
import { AuthCreateInput } from '@app/prisma-generated/generated/nestgraphql/auth/auth-create.input';
import { Auth } from '@app/prisma-generated/generated/nestgraphql/auth/auth.model';

export class TokenType {
  accessToken: string;
  refreshToken: string;
}

export class PasswordResetInitiateResponseType {
  passwordResetToken: string;
}

export class PasswordResetCompleteResponseType {
  message: string;
}

@Resolver()
export class AuthResolver {
  private readonly logger = new Logger(AuthResolver.name);

  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthCreateInput)
  async register(
    @Args('authCreateInput') authCreateInput: AuthCreateInput,
  ): Promise<{ user: Auth; refreshToken: string }> {
    this.logger.log(`Registering user with email: ${authCreateInput.email}`);
    const { user, refreshToken } =
      await this.authService.register(authCreateInput);
    return {
      user, // This would typically be a User object
      refreshToken, // You may want to return a Token object or a custom GraphQL type instead
    };
  }

  @Mutation(() => String)
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<string> {
    this.logger.log(`User login attempt with email: ${email}`);
    return this.authService.login(email, password);
  }

  @Mutation(() => TokenType)
  async refreshToken(
    @Args('userId') userId: string,
    @Args('refreshToken') refreshToken: string,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    this.logger.log(`Refreshing token for user ID: ${userId}`);
    return this.authService.generateTokens(userId, refreshToken);
  }

  @Mutation(() => PasswordResetInitiateResponseType)
  async initiatePasswordReset(
    @Args('email') email: string,
  ): Promise<{ passwordResetToken: string }> {
    this.logger.log(`Initiating password reset for email: ${email}`);
    const passwordResetToken =
      await this.authService.initiatePasswordReset(email);
    return { passwordResetToken };
  }

  @Mutation(() => PasswordResetCompleteResponseType)
  async completePasswordReset(
    @Args('token') token: string,
    @Args('newPassword') newPassword: string,
  ): Promise<string> {
    this.logger.log(`Completing password reset for token: ${token}`);
    return this.authService.completePasswordReset(token, newPassword);
  }
}
