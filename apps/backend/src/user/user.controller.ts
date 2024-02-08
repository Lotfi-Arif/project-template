import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { TypedBody, TypedParam, TypedRoute } from '@nestia/core';
import {
  CreateUserResult,
  DeleteUserResult,
  GetAllUserResult,
  GetUserResult,
  UpdateUserResult,
  UserCreateInput,
  UserUpdateInput,
} from '@tradetrove/shared-types';
import { err, ok } from 'neverthrow';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @TypedRoute.Post()
  async create(
    @TypedBody() createUserDto: UserCreateInput,
  ): Promise<CreateUserResult> {
    try {
      const user = await this.userService.create(createUserDto);

      if (user.isErr()) {
        return err(user.error);
      }

      const createdUser = user.value;

      return ok(createdUser);
    } catch (error) {
      return err(new Error('Error creating user'));
    }
  }

  @TypedRoute.Post('register')
  async register(
    @TypedBody() createUserDto: UserCreateInput,
  ): Promise<CreateUserResult> {
    try {
      const user = await this.userService.create(createUserDto);

      if (user.isErr()) {
        return err(user.error);
      }

      const createdUser = user.value;

      return ok(createdUser);
    } catch (error) {
      return err(new Error('Error creating user'));
    }
  }

  @TypedRoute.Get()
  async findAll(): Promise<GetAllUserResult> {
    try {
      const users = await this.userService.findAll();

      if (users.isErr()) {
        return err(users.error);
      }

      const foundUsers = users.value;

      return ok(foundUsers);
    } catch (error) {
      return err(new Error('Error finding all users'));
    }
  }

  // TODO: add better error handling for not found instead of returning null
  @TypedRoute.Get(':id')
  async findOne(@TypedParam('id') id: string): Promise<GetUserResult> {
    try {
      const user = await this.userService.findOne(id);

      if (user.isErr()) {
        return err(user.error);
      }

      const foundUser = user.value;

      return ok(foundUser);
    } catch (error) {
      return err(new Error('Error finding user'));
    }
  }

  @TypedRoute.Patch(':id')
  async update(
    @TypedParam('id') id: string,
    @TypedBody() updateUserDto: UserUpdateInput,
  ): Promise<UpdateUserResult> {
    try {
      const user = await this.userService.update(id, updateUserDto);

      if (user.isErr()) {
        return err(user.error);
      }

      const updatedUser = user.value;

      return ok(updatedUser);
    } catch (error) {
      return err(new Error('Error updating user'));
    }
  }

  @TypedRoute.Delete(':id')
  async remove(@TypedParam('id') id: string): Promise<DeleteUserResult> {
    try {
      const user = await this.userService.remove(id);

      if (user.isErr()) {
        return err(user.error);
      }

      const deletedUser = user.value;

      return ok(deletedUser);
    } catch (error) {
      return err(new Error('Error removing user'));
    }
  }
}
