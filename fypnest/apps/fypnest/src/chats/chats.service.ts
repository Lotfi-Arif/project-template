import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ChatsService {
  constructor(private prisma: PrismaService) {}

  async findAll(chatFindManyArgs: Prisma.ChatFindManyArgs) {
    return this.prisma.chat.findMany(chatFindManyArgs);
  }
  async findOne(chatFindOneArgs: Prisma.ChatFindUniqueArgs) {
    return this.prisma.chat.findUnique(chatFindOneArgs);
  }
  async createChat(chatCreateOneArgs: Prisma.ChatCreateArgs) {
    return this.prisma.chat.create(chatCreateOneArgs);
  }
  async updateChat(chatUpdateArgs: Prisma.ChatUpdateArgs) {
    return this.prisma.chat.update(chatUpdateArgs);
  }
  async deleteChat(chatDeleteArgs: Prisma.ChatDeleteArgs) {
    return this.prisma.chat.delete(chatDeleteArgs);
  }
}
