import { Args, Mutation, ObjectType, Field, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Logger } from '@nestjs/common';
import { Auth } from '@app/prisma-generated/generated/nestgraphql/auth/auth.model';
import { CreateOneAuthArgs } from '@app/prisma-generated/generated/nestgraphql/auth/create-one-auth.args';

@ObjectType()
export class TokenType {
  @Field()
  accessToken: string;

  @Field()
  refreshToken: string;
}

@ObjectType()
export class PasswordResetInitiateResponseType {
  @Field()
  passwordResetToken: string;
}

@ObjectType()
export class PasswordResetCompleteResponseType {
  @Field()
  message: string;
}

@Resolver()
export class AuthResolver {
  private readonly logger = new Logger(AuthResolver.name);

  constructor(private readonly authService: AuthService) {}

  @Mutation(() => CreateOneAuthArgs)
  async register(
    @Args('authCreateInput') createOneAuthArgs: CreateOneAuthArgs,
  ): Promise<{ user: Auth; refreshToken: string }> {
    this.logger.log(
      `Registering user with email: ${createOneAuthArgs.data.email}`,
    );
    const { user, refreshToken } =
      await this.authService.register(createOneAuthArgs);
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
  ): Promise<PasswordResetCompleteResponseType> {
    this.logger.log(`Completing password reset for token: ${token}`);
    const message = await this.authService.completePasswordReset(
      token,
      newPassword,
    );
    return { message }; // Wrap the message in the appropriate GraphQL object type
  }
}
