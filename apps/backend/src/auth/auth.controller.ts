import { Controller, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  Auth,
  AuthCreateInput,
  AuthUpdateInput,
  Login,
  LoginInput,
} from '@tradetrove/shared-types';
import { TypedBody, TypedParam, TypedRoute } from '@nestia/core';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @TypedRoute.Post('login')
  async login(@TypedBody() loginInput: LoginInput): Promise<Login> {
    const user = await this.authService.validateUser(
      loginInput.username,
      loginInput.password,
    );
    if (!user) {
      throw new UnauthorizedException();
    }
    return this.authService.login(user);
  }

  @TypedRoute.Post()
  create(@TypedBody() createAuthDto: AuthCreateInput): Promise<Auth> {
    return this.authService.create(createAuthDto);
  }

  @TypedRoute.Get()
  findAll(): Promise<Auth[]> {
    return this.authService.findAll();
  }

  @TypedRoute.Get(':id')
  findOne(@TypedParam('id') id: string) {
    return this.authService.findOne(id);
  }

  @TypedRoute.Patch(':id')
  update(
    @TypedParam('id') id: string,
    @TypedBody() updateAuthDto: AuthUpdateInput,
  ) {
    return this.authService.update(id, updateAuthDto);
  }

  @TypedRoute.Delete(':id')
  remove(@TypedParam('id') id: string) {
    return this.authService.remove(id);
  }
}
