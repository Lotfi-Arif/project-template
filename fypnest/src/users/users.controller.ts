import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User as UserModel } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  async createUser(
    @Body() userData: { name?: string; email: string; password?: string; mobile?: string; },
  ): Promise<UserModel> {
    try {
      return await this.usersService.createUser(userData);
    } catch (error) {
      console.log(error);
    }
  }

  @Get()
  async getUsers() {
    const allUsers = await this.usersService.users();
    return allUsers;
  }

  @Get('/:id')
  async getUser(@Param('id') id: Number ){
    return await this.usersService.user({id: +id});
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id:Number){
    return await this.usersService.deleteUser({id: +id});
  }
}
