import { Injectable, Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Message as MessageModel } from 'libs/prisma/src/generated/nestgraphql/message/message.model';

@Injectable()
export class MessageService {
  private prisma: PrismaClient;
  private readonly logger: Logger;

  constructor() {
    this.prisma = new PrismaClient();
    this.logger = new Logger(MessageService.name);
  }

  async getMessages(): Promise<MessageModel[]> {
    this.logger.log('Retrieving messages');
    const messages = await this.prisma.message.findMany();
    this.logger.debug(`Found ${messages.length} messages`);
    return messages;
  }

  async createMessage(
    content: string,
    senderId: string,
    chatId: string,
  ): Promise<MessageModel> {
    this.logger.log(`Creating a message with content: ${content}`);
    const message = await this.prisma.message.create({
      data: {
        content,
        chat: { connect: { id: chatId } },
        sender: { connect: { id: senderId } },
        createdAt: new Date(),
      },
    });
    this.logger.debug(`Message created with ID: ${message.id}`);
    return message;
  }

  async updateMessage(
    id: string,
    content: string,
  ): Promise<MessageModel | null> {
    this.logger.log(`Updating message with ID: ${id}`);
    const updatedMessage = await this.prisma.message.update({
      where: { id },
      data: { content },
    });
    this.logger.debug(`Message updated with ID: ${updatedMessage.id}`);
    return updatedMessage;
  }

  async deleteMessage(id: string): Promise<MessageModel | null> {
    this.logger.log(`Deleting message with ID: ${id}`);
    const deletedMessage = await this.prisma.message.delete({
      where: { id },
    });
    this.logger.debug(`Message deleted with ID: ${deletedMessage.id}`);
    return deletedMessage;
  }
}
