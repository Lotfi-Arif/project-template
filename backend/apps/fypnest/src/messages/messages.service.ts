import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';


@Injectable()
export class MessagesService {
  constructor(private prisma: PrismaService) { }

  async findAll(messageFindManyArgs: Prisma.MessageFindManyArgs) {
    return this.prisma.message.findMany(messageFindManyArgs);
  }
  async findOne(messageFindOneArgs: Prisma.MessageFindUniqueArgs) {
    return this.prisma.message.findUnique(messageFindOneArgs);
  }
  async createMessage(messageCreateOneArgs: Prisma.MessageCreateArgs) {
    return this.prisma.message.create(messageCreateOneArgs);
  }
  async updateMessage(messageUpdateArgs: Prisma.MessageUpdateArgs) {
    return this.prisma.message.update(messageUpdateArgs);
  }
  async deleteMessage(messageDeleteArgs: Prisma.MessageDeleteArgs) {
    return this.prisma.message.delete(messageDeleteArgs);
  }
}
