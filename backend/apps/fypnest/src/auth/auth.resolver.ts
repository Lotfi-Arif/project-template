import { Args, Mutation, ObjectType, Field, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Logger } from '@nestjs/common';
import { Auth } from '@app/prisma-generated/generated/nestgraphql/auth/auth.model';
import { CreateOneAuthArgs } from '@app/prisma-generated/generated/nestgraphql/auth/create-one-auth.args';
import { handleHttpError } from '@app/common/utils';

@ObjectType()
export class RegisterResponseType {
  @Field(() => Auth)
  user: Auth;

  @Field()
  accessToken: string;

  @Field()
  refreshToken: string;
}

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

  @Mutation(() => RegisterResponseType)
  async register(
    @Args() createOneAuthArgs: CreateOneAuthArgs,
  ): Promise<RegisterResponseType> {
    try {
      this.logger.debug('Registering a new user');
      const registrationResult =
        await this.authService.register(createOneAuthArgs);
      return {
        user: registrationResult.user,
        accessToken: registrationResult.accessToken,
        refreshToken: registrationResult.refreshToken,
      };
    } catch (error) {
      this.logger.error('Failed to register a new user', { error });
      throw handleHttpError(error, 'Failed to register a new user');
    }
  }

  @Mutation(() => TokenType)
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<TokenType> {
    try {
      const { accessToken, refreshToken } = await this.authService.login(
        email,
        password,
      );
      return { accessToken, refreshToken };
    } catch (error) {
      this.logger.error('Failed to login', { error });
      throw handleHttpError(error, 'Failed to login');
    }
  }

  @Mutation(() => TokenType)
  async refreshToken(
    @Args('userId') userId: string,
    @Args('token') token: string,
  ): Promise<TokenType> {
    try {
      this.logger.log(`Refreshing token for user ID: ${userId}`);
      const accessToken = await this.authService.refreshToken(userId, token);
      return { accessToken, refreshToken: token };
    } catch (error) {
      this.logger.error(`Failed to refresh token for user ID: ${userId}`, {
        error,
      });
      throw handleHttpError(error, 'Failed to refresh token');
    }
  }

  @Mutation(() => PasswordResetInitiateResponseType)
  async initiatePasswordReset(
    @Args('email') email: string,
  ): Promise<PasswordResetInitiateResponseType> {
    try {
      const passwordResetToken =
        await this.authService.initiatePasswordReset(email);
      return { passwordResetToken };
    } catch (error) {
      this.logger.error('Failed to initiate password reset', { error });
      throw handleHttpError(error, 'Failed to initiate password reset');
    }
  }

  @Mutation(() => PasswordResetCompleteResponseType)
  async completePasswordReset(
    @Args('token') token: string,
    @Args('newPassword') newPassword: string,
  ): Promise<PasswordResetCompleteResponseType> {
    try {
      const message = await this.authService.completePasswordReset(
        token,
        newPassword,
      );
      return { message };
    } catch (error) {
      this.logger.error('Failed to complete password reset', { error });
      throw handleHttpError(error, 'Failed to complete password reset');
    }
  }
}
