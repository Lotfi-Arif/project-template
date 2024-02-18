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
import { err, ok } from 'neverthrow';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: UserCreateInput): Promise<CreateUserResult> {
    const user = await this.prisma.user.create({
      data: {
        ...createUserDto,
      },
    });

    return ok(user);
  }

  async findAll(): Promise<GetAllUserResult> {
    const users = await this.prisma.user.findMany();
    return ok(users);
  }

  async findOne(id: string): Promise<GetUserResult> {
    const user = await this.prisma.user.findUnique({ where: { id } });

    if (!user) {
      return err(new Error('User not found'));
    }

    return ok(user);
  }

  async update(
    id: string,
    updateUserDto: UserUpdateInput,
  ): Promise<UpdateUserResult> {
    const user = await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
    return ok(user);
  }

  async remove(id: string): Promise<DeleteUserResult> {
    const user = await this.prisma.user.delete({ where: { id } });
    return ok(user);
  }
}
