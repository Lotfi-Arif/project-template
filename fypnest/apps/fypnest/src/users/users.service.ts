import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma'
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async findAll(userFindManyArgs: Prisma.UserFindManyArgs) {
    return this.prisma.user.findMany(userFindManyArgs);
  }
  async findOne(userFindOneArgs: Prisma.UserFindUniqueArgs) {
    return this.prisma.user.findUnique(userFindOneArgs);
  }
  async createUser(userCreateOneArgs: Prisma.UserCreateArgs) {
    return this.prisma.user.create(userCreateOneArgs);
  }
  async updateUser(userUpdateArgs: Prisma.UserUpdateArgs) {
    return this.prisma.user.update(userUpdateArgs);
  }
  async deleteUser(userDeleteArgs: Prisma.UserDeleteArgs) {
    return this.prisma.user.delete(userDeleteArgs);
  }
}