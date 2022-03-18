import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { Chat } from '@app/common/generated/index/chat/chat.model';
import { ChatsService } from './chats.service';
import { FindManyChatArgs } from '@app/common/generated/index/chat/find-many-chat.args';
import { CreateOneChatArgs } from '@app/common/generated/index/chat/create-one-chat.args';
import { DeleteOneChatArgs } from '@app/common/generated/index/chat/delete-one-chat.args';
import { UpdateOneChatArgs } from '@app/common/generated/index/chat/update-one-chat.args';
import { FindUniqueChatArgs } from '@app/common/generated/index/chat/find-unique-chat.args';

@Resolver(() => Chat)
export class ChatsResolver {
  constructor(private readonly chatsService: ChatsService) {
  }

  @Query(() => Chat)
  async findAllChats(@Args() chatFindManyArgs: FindManyChatArgs, @Info() info) {
    try {
      const chats = new PrismaSelect(info).value
      return this.chatsService.findAll({ ...chatFindManyArgs, ...chats })
    } catch (error) {
      console.error(error);
    }

  }

  @Mutation(() => Chat)
  async findOneChat(@Args() chatFindUnique: FindUniqueChatArgs, @Info() info) {
    try {
      const chat = new PrismaSelect(info).value;
      return this.chatsService.findOne({ ...chatFindUnique, ...chat })
    } catch (error) {
      console.error(error);
    }
  }

  @Mutation(() => Chat)
  async createChat(@Args() chatCreateArgs: CreateOneChatArgs, @Info() info) {
    try {
      const newChat = new PrismaSelect(info).value;
      return this.chatsService.createChat({ ...chatCreateArgs, ...newChat })
    } catch (error) {
      console.error(error);
    }
  }

  @Mutation(() => Chat)
  async updateChat(@Args() chatUpdateArgs: UpdateOneChatArgs, @Info() info) {
    try {
      const update = new PrismaSelect(info).value;
      return this.chatsService.updateChat({ ...chatUpdateArgs, ...update })
    } catch (error) {
      console.error(error);
    }

  }

  @Mutation(() => Chat)
  async deleteChat(@Args() chatDeletArgs: DeleteOneChatArgs, @Info() info) {
    try {
      const chat = new PrismaSelect(info).value;
      return this.chatsService.deleteChat({ ...chatDeletArgs, ...chat })
    } catch (error) {
      console.error(error);
    }
  }
}