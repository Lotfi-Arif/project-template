import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma'
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }
  findAll(userFindManyArgs: Prisma.UserFindManyArgs) {
    return this.prisma.user.findMany(userFindManyArgs)
  }
}