import {
  Args,
  Info,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { Chat } from '@app/common/generated/index/chat/chat.model';
import { ChatsService } from './chats.service';
import { FindManyChatArgs } from '@app/common/generated/index/chat/find-many-chat.args';
import { CreateOneChatArgs } from '@app/common/generated/index/chat/create-one-chat.args';
import { DeleteOneChatArgs } from '@app/common/generated/index/chat/delete-one-chat.args';
import { UpdateOneChatArgs } from '@app/common/generated/index/chat/update-one-chat.args';
import { FindUniqueChatArgs } from '@app/common/generated/index/chat/find-unique-chat.args';
import { CurrentUser, GqlAuthGuard } from '../auth/guards/graph-auth.guard';
import { User } from '@app/common/generated/index/user/user.model';
import { PubSub } from 'graphql-subscriptions';
import { UseGuards } from '@nestjs/common';

@Resolver(() => Chat)
export class ChatsResolver {
  private pubSub = new PubSub();
  constructor(private readonly chatsService: ChatsService) {}

  @Query(() => Chat)
  async findAllUserChats(
    @Args() chatFindManyArgs: FindManyChatArgs,
    @CurrentUser() user: User,
    @Info() info,
  ) {
    try {
      const chats = new PrismaSelect(info).value;
      return this.chatsService.findAll({ where: { users: user }, ...chats });
    } catch (error) {
      console.error(error);
    }
  }

  @Query(() => Chat)
  async findOneChat(@Args() chatFindUnique: FindUniqueChatArgs, @Info() info) {
    try {
      const chat = new PrismaSelect(info).value;
      return this.chatsService.findOne({ ...chatFindUnique, ...chat });
    } catch (error) {
      console.error(error);
    }
  }

  @Mutation(() => Chat)
  async createChat(
    @Args() chatCreateArgs: CreateOneChatArgs,
    @Info() info,
  ) {
    try {
      const newChat = new PrismaSelect(info).value;
      const createdChat = await this.chatsService.createChat({
        ...chatCreateArgs,
        ...newChat,
      });
      this.pubSub.publish(`onChats:${(await newChat).chatId}`, {
        onChats: createdChat,
      });
      return createdChat;
    } catch (error) {
      console.error(error);
    }
  }

  @Mutation(() => Chat)
  async updateChat(@Args() chatUpdateArgs: UpdateOneChatArgs, @Info() info) {
    try {
      const update = new PrismaSelect(info).value;
      return this.chatsService.updateChat({ ...chatUpdateArgs, ...update });
    } catch (error) {
      console.error(error);
    }
  }

  @Mutation(() => Chat)
  async deleteChat(@Args() chatDeletArgs: DeleteOneChatArgs, @Info() info) {
    try {
      const chat = new PrismaSelect(info).value;
      return this.chatsService.deleteChat({ ...chatDeletArgs, ...chat });
    } catch (error) {
      console.error(error);
    }
  }

  @Subscription(() => Chat)
  // @UseGuards(GqlAuthGuard)
  async onChatCreations(@CurrentUser() user: User) {
    return this.pubSub.asyncIterator(`onChats:${user.id}`);
  }
}
