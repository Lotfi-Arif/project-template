import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma } from '@prisma/client';
import { TypedBody, TypedParam, TypedRoute } from '@nestia/core';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @TypedRoute.Post()
  create(@TypedBody() createUserDto: Prisma.UserCreateInput): any {
    return this.userService.create(createUserDto);
  }

  @TypedRoute.Get()
  findAll() {
    return this.userService.findAll();
  }

  @TypedRoute.Get(':id')
  findOne(@TypedParam('id') id: string) {
    return this.userService.findOne(+id);
  }

  @TypedRoute.Patch(':id')
  update(
    @TypedParam('id') id: string,
    @TypedBody() updateUserDto: Prisma.UserUpdateInput,
  ): any {
    return this.userService.update(+id, updateUserDto);
  }

  @TypedRoute.Delete(':id')
  remove(@TypedParam('id') id: string): any {
    return this.userService.remove(+id);
  }
}
