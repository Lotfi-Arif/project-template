import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Logger } from '@nestjs/common';
import { User } from '@app/prisma-generated/generated/nestgraphql/user/user.model';
import { Prisma } from '@prisma/client';

@Resolver()
export class AuthResolver {
  private readonly logger = new Logger(AuthResolver.name);

  constructor(private readonly authService: AuthService) {}

  @Mutation(() => User)
  async register(@Args('data') data: Prisma.UserCreateInput): Promise<User> {
    this.logger.log(`Attempting to register user with email: ${data.email}`);
    const user = await this.authService.register(data);
    return user;
  }

  @Mutation(() => String)
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<string> {
    this.logger.log(`Attempting login for email: ${email}`);
    const { access_token } = await this.authService.login(email, password);
    return access_token;
  }
}
