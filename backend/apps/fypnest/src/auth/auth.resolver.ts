import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Logger } from '@nestjs/common';
import { User } from 'libs/prisma/src/generated/nestgraphql/user/user.model';

@Resolver(() => User)
export class AuthResolver {
  private readonly logger = new Logger(AuthResolver.name);

  constructor(private authService: AuthService) {}

  @Mutation(() => User)
  async register(
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<User> {
    try {
      this.logger.log('Registering a new user');
      const user = await this.authService.register(email, password);
      return user;
    } catch (error) {
      this.logger.error(`Failed to register user: ${error.message}`);
      throw new Error(error.message);
    }
  }

  @Mutation(() => User)
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<string> {
    try {
      this.logger.log('Logging in a user');
      const { access_token } = await this.authService.login(email, password);
      return access_token;
    } catch (error) {
      this.logger.error(`Failed to log in user: ${error.message}`);
      throw new Error(error.message);
    }
  }
}
