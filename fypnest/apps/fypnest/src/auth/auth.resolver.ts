import { User } from '@app/common/generated/index/user/user.model';
import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { Auth } from 'model/auth.model';
import { AuthService } from './auth.service';
import { CurrentUser, GqlAuthGuard } from './guards/graph-auth.guard';
import { LoginInput } from './dto/login.input';
import { SignupInput } from './dto/signup.input';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => Auth)
  async loginStudent(@Args('data') { email, password }: LoginInput) {
    const { accessToken, refreshToken } = await this.authService.loginStudent(
      email.toLowerCase(),
      password
    );

    return {
      accessToken,
      refreshToken,
    };
  }

  @Mutation(() => Auth)
  async loginStaff(@Args('data') { email, password }: LoginInput) {
    const { accessToken, refreshToken } = await this.authService.loginStaff(
      email.toLowerCase(),
      password
    );

    return {
      accessToken,
      refreshToken,
    };
  }

  @Mutation(() => Auth)
  async loginCounselor(@Args('data') { email, password }: LoginInput) {
    const { accessToken, refreshToken } = await this.authService.loginCouselor(
      email.toLowerCase(),
      password
    );

    return {
      accessToken,
      refreshToken,
    };
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
