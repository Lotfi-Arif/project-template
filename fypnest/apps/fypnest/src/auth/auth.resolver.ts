import { User } from '@app/common/generated/index/user/user.model';
import { UnauthorizedException, UseGuards } from '@nestjs/common';
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
  async loginUser(@Args('data') { email, password, role }: LoginInput) {
    try {
      const result = await this.authService.login(
        email.toLowerCase(),
        password,
        role,
      );
      return result;
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
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
  @UseGuards(GqlAuthGuard)
  async currentUser(@CurrentUser() user: User) {
    return user;
  }
}
