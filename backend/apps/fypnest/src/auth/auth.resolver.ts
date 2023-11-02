import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Logger } from '@nestjs/common';

@Resolver()
export class AuthResolver {
  private readonly logger = new Logger(AuthResolver.name);

  constructor(private readonly authService: AuthService) {}

  @Mutation(() => String)
  async register(
    @Args('username') username: string,
    @Args('password') password: string,
    @Args('email') email: string,
  ): Promise<string> {
    this.logger.log(`Registering user with email: ${email}`);
    const auth = await this.authService.register(username, password, email);
    return `Registered successfully with ID: ${auth.id}`;
  }

  @Mutation(() => String)
  async login(
    @Args('username') username: string,
    @Args('password') password: string,
  ): Promise<string> {
    this.logger.log(`User login attempt with username: ${username}`);
    return this.authService.login(username, password);
  }
}
