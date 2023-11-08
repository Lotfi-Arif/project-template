import { Args, Mutation, ObjectType, Field, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import {
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Auth } from '@app/prisma-generated/generated/nestgraphql/auth/auth.model';
import { CreateOneAuthArgs } from '@app/prisma-generated/generated/nestgraphql/auth/create-one-auth.args';
import { GraphQLError } from 'graphql';

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
    @Args('createOneAuthArgs') createOneAuthArgs: CreateOneAuthArgs,
  ): Promise<RegisterResponseType> {
    try {
      this.logger.debug('Registering a new user');
      const registrationResult =
        await this.authService.register(createOneAuthArgs);
      return {
        user: registrationResult.user, // Assuming the user object has all required Auth fields
        accessToken: registrationResult.accessToken,
        refreshToken: registrationResult.refreshToken,
      };
    } catch (error) {
      let message = 'Unable to register user.';
      if (error.status === 409) {
        message = 'Email already in use.';
      }
      throw new GraphQLError(
        message,
        error.status ? error.status.toString() : '500',
      );
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
      let message = 'Authentication failed.';
      if (error.status === 401) {
        message = 'Invalid credentials.';
      } else if (error.status === 404) {
        message = 'User not found.';
      }
      throw new GraphQLError(
        message,
        error.status ? error.status.toString() : '500',
      );
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
      return { accessToken, refreshToken: token }; // refreshToken remains the same
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw new GraphQLError('Unauthorized: Invalid refresh token.', {
          extensions: { code: 'UNAUTHORIZED' },
        });
      } else if (error instanceof NotFoundException) {
        throw new GraphQLError('Not Found: Authentication record not found.', {
          extensions: { code: 'NOT_FOUND' },
        });
      } else {
        throw new GraphQLError(
          'Internal Server Error: Unable to refresh token.',
          {
            extensions: { code: 'INTERNAL_SERVER_ERROR' },
          },
        );
      }
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
      throw new GraphQLError(
        'Unable to initiate password reset.',
        error.status ? error.status.toString() : '500',
      );
    }
  }

  @Mutation(() => PasswordResetCompleteResponseType)
  async completePasswordReset(
    @Args('token') token: string,
    @Args('newPassword') newPassword: string,
  ): Promise<PasswordResetCompleteResponseType> {
    try {
      await this.authService.completePasswordReset(token, newPassword);
      return { message: 'Password reset successfully.' };
    } catch (error) {
      let message = 'Unable to complete password reset.';
      if (error.status === 404) {
        message = 'Reset token not found.';
      } else if (error.status === 400) {
        message = 'Invalid reset token.';
      }
      throw new GraphQLError(
        message,
        error.status ? error.status.toString() : '500',
      );
    }
  }
}
