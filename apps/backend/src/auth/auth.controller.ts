import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  AuthCreateInput,
  AuthUpdateInput,
  CreateAuthResult,
  DeleteAuthResult,
  GetAllAuthResult,
  GetAuthResult,
  LoginInput,
  LoginResult,
  UpdateAuthResult,
} from '@tradetrove/shared-types';
import { TypedBody, TypedParam, TypedRoute } from '@nestia/core';
import { err, ok } from 'neverthrow';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @TypedRoute.Post('login')
  async login(@TypedBody() loginInput: LoginInput): Promise<LoginResult> {
    try {
      const login = await this.authService.login(loginInput);

      if (login.isErr()) {
        return err(login.error);
      }

      const loginResponse = login.value;

      return ok(loginResponse);
    } catch (error) {
      if (error instanceof Error)
        return err(new Error(`Invalid username or password ${error.message}`));
      return err(new Error('Error logging in'));
    }
  }

  @TypedRoute.Post()
  async create(
    @TypedBody() createAuthDto: AuthCreateInput,
  ): Promise<CreateAuthResult> {
    try {
      const auth = await this.authService.create(createAuthDto);

      if (auth.isErr()) {
        return err(auth.error);
      }

      const createdAuth = auth.value;

      return ok(createdAuth);
    } catch (error) {
      if (error instanceof Error)
        return err(new Error(`Error creating auth: ${error.message}`));
      return err(new Error('Error creating auth'));
    }
  }

  @TypedRoute.Get()
  async findAll(): Promise<GetAllAuthResult> {
    try {
      const auths = await this.authService.findAll();

      if (auths.isErr()) {
        return err(auths.error);
      }

      const foundAuths = auths.value;

      return ok(foundAuths);
    } catch (error) {
      if (error instanceof Error)
        return err(
          new Error(`Error finding all auth records: ${error.message}`),
        );
      return err(new Error('Error finding all auth records'));
    }
  }

  @TypedRoute.Get(':id')
  async findOne(@TypedParam('id') id: string): Promise<GetAuthResult> {
    try {
      const auth = await this.authService.findOne(id);

      if (auth.isErr()) {
        return err(auth.error);
      }

      const foundAuth = auth.value;

      return ok(foundAuth);
    } catch (error) {
      if (error instanceof Error)
        return err(new Error(`Error finding auth record: ${error.message}`));
      return err(new Error('Error finding auth record'));
    }
  }

  @TypedRoute.Patch(':id')
  async update(
    @TypedParam('id') id: string,
    @TypedBody() updateAuthDto: AuthUpdateInput,
  ): Promise<UpdateAuthResult> {
    try {
      const auth = await this.authService.update(id, updateAuthDto);

      if (auth.isErr()) {
        return err(auth.error);
      }

      const updatedAuth = auth.value;

      return ok(updatedAuth);
    } catch (error) {
      if (error instanceof Error)
        return err(new Error(`Error updating auth record: ${error.message}`));
      return err(new Error('Error updating auth record'));
    }
  }

  @TypedRoute.Delete(':id')
  async remove(@TypedParam('id') id: string): Promise<DeleteAuthResult> {
    try {
      const auth = await this.authService.remove(id);

      if (auth.isErr()) {
        return err(auth.error);
      }

      const deletedAuth = auth.value;

      return ok(deletedAuth);
    } catch (error) {
      if (error instanceof Error)
        return err(new Error(`Error removing auth record: ${error.message}`));
      return err(new Error('Error removing auth record'));
    }
  }
}
