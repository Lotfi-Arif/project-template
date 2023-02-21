import { User } from '@app/common/generated/index/user/user.model';
import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args, Query, ResolveField, Parent, Info } from '@nestjs/graphql';
import { Auth } from 'model/auth.model';
import { AuthService } from './auth.service';
import { CurrentUser, GqlAuthGuard } from './guards/graph-auth.guard';
import { LoginInput } from './dto/login.input';
import { SignupInput } from './dto/signup.input';
import { PrismaSelect } from '@paljs/plugins';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => Auth)
  async loginUser(@Args('data') { email, password }: LoginInput) {
    const { accessToken, refreshToken } = await this.authService.loginUser(
      email.toLowerCase(),
      password
    );

    return {
      accessToken,
      refreshToken,
    };
  }

  @ResolveField('user', () => User)
  async user(@Parent() auth: Auth, @Info() info) {
    const select = new PrismaSelect(info).value;
    return await this.authService.getUserFromToken(auth.accessToken, select);
  }

  @Mutation(() => Auth)
  async signup(@Args('data') data: SignupInput) {
    data.email = data.email.toLowerCase();
    const { accessToken, refreshToken } = await this.authService.createUser(
      data,
    );
    return {
      accessToken,
      refreshToken,
    };
  }

  @Query(() => User)
  // @UseGuards(GqlAuthGuard)
  async currentUser(@CurrentUser() user: User) {
    return user;
  }
}
