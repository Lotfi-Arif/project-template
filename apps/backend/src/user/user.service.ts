import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import {
  CreateUserResult,
  DeleteUserResult,
  GetAllUserResult,
  GetUserResult,
  UpdateUserResult,
  UserCreateInput,
  UserUpdateInput,
} from '@tradetrove/shared-types';
import * as bcrypt from 'bcrypt';
import { err, ok } from 'neverthrow';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: UserCreateInput): Promise<CreateUserResult> {
    try {
      const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
      // return user withoput password
      const user = await this.prisma.user.create({
        data: {
          ...createUserDto,
          password: hashedPassword,
        },
      });
      return ok(user);
    } catch (error) {
      return err(new Error('Error creating user'));
    }
  }

  async findAll(): Promise<GetAllUserResult> {
    try {
      const users = await this.prisma.user.findMany();
      return ok(users);
    } catch (error) {
      return err(new Error('Error finding all users'));
    }
  }

  async findOne(id: string): Promise<GetUserResult> {
    try {
      const user = await this.prisma.user.findUnique({ where: { id } });
      return ok(user);
    } catch (error) {
      return err(new Error('Error finding user'));
    }
  }

  async update(
    id: string,
    updateUserDto: UserUpdateInput,
  ): Promise<UpdateUserResult> {
    try {
      const user = await this.prisma.user.update({
        where: { id },
        data: updateUserDto,
      });
      return ok(user);
    } catch (error) {
      return err(new Error('Error updating user'));
    }
  }

  async remove(id: string): Promise<DeleteUserResult> {
    try {
      const user = await this.prisma.user.delete({ where: { id } });
      return ok(user);
    } catch (error) {
      return err(new Error('Error removing user'));
    }
  }
}
