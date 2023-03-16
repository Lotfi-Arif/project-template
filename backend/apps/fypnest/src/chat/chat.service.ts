import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Chat, Prisma } from '@prisma/client';

@Injectable()
export class ChatService {
  private readonly logger = new Logger(ChatService.name);

  constructor(private prisma: PrismaService) {}

  async createChat(data: Prisma.ChatCreateInput): Promise<Chat> {
    this.logger.log(`Creating chat: ${JSON.stringify(data)}`);
    return this.prisma.chat.create({ data });
  }

  async getChatById(id: string): Promise<Chat | null> {
    this.logger.log(`Getting chat by id: ${id}`);
    return this.prisma.chat.findUnique({ where: { id } });
  }

  async deleteChat(id: string): Promise<Chat> {
    this.logger.log(`Deleting chat by id: ${id}`);
    return this.prisma.chat.delete({ where: { id } });
  }

  async getChats(params: { skip?: number; take?: number }): Promise<Chat[]> {
    const { skip, take } = params;
    this.logger.log(`Getting chats with skip: ${skip}, take: ${take}`);
    return this.prisma.chat.findMany({ skip, take });
  }
}
