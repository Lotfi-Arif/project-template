import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MessageService } from './message.service';
import { Message as MessageModel } from 'libs/prisma/src/generated/nestgraphql/message/message.model';
import { Logger } from '@nestjs/common';

@Resolver(() => MessageModel)
export class MessageResolver {
  private readonly logger = new Logger(MessageResolver.name);

  constructor(private readonly messageService: MessageService) {}

  @Query(() => [MessageModel])
  async messages(): Promise<MessageModel[]> {
    this.logger.log('Querying all messages');
    return this.messageService.getMessages();
  }

  @Query(() => MessageModel)
  async message(@Args('id') id: string): Promise<MessageModel> {
    this.logger.log(`Querying message with ID: ${id}`);
    return this.messageService.getMessageById(id);
  }

  @Mutation(() => MessageModel)
  async createMessage(
    @Args('content') content: string,
    @Args('senderId') senderId: string,
    @Args('chatId') chatId: string,
  ): Promise<MessageModel> {
    this.logger.log(`Creating a message with content: ${content}`);
    return this.messageService.createMessage(content, senderId, chatId);
  }

  @Mutation(() => MessageModel)
  async updateMessage(
    @Args('id') id: string,
    @Args('content') content: string,
  ): Promise<MessageModel> {
    this.logger.log(`Updating message with ID: ${id}`);
    return this.messageService.updateMessage(id, content);
  }

  @Mutation(() => MessageModel)
  async deleteMessage(@Args('id') id: string): Promise<MessageModel> {
    this.logger.log(`Deleting message with ID: ${id}`);
    return this.messageService.deleteMessage(id);
  }
}
