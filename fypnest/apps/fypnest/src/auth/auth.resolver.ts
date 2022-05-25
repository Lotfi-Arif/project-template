import { UnauthorizedException } from '@nestjs/common';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { Auth } from 'model/auth.model';
import { AuthService } from './auth.service';
import { LoginInput } from './dto/login.input';

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
}
