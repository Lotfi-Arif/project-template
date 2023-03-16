import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Chat } from 'libs/prisma/src/generated/nestgraphql/chat/chat.model';
import { ChatService } from './chat.service';
import { Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Resolver(() => Chat)
export class ChatResolver {
  private readonly logger = new Logger(ChatResolver.name);

  constructor(private chatService: ChatService) {}

  @Query(() => [Chat])
  async chats(
    @Args('skip') skip?: number,
    @Args('take') take?: number,
  ): Promise<Chat[]> {
    this.logger.log(`Querying chats with skip: ${skip}, take: ${take}`);
    return this.chatService.getChats({ skip, take });
  }

  @Query(() => Chat)
  async chat(@Args('id') id: string): Promise<Chat | null> {
    this.logger.log(`Querying chat with id: ${id}`);
    return this.chatService.getChatById(id);
  }

  @Mutation(() => Chat)
  async createChat(@Args('data') data: Prisma.ChatCreateInput): Promise<Chat> {
    this.logger.log(`Creating chat: ${JSON.stringify(data)}`);
    return this.chatService.createChat(data);
  }

  @Mutation(() => Chat)
  async deleteChat(@Args('id') id: string): Promise<Chat> {
    this.logger.log(`Deleting chat with id: ${id}`);
    return this.chatService.deleteChat(id);
  }
}
