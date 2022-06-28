import {
  Args,
  Info,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { Message } from '@app/common/generated/index/message/message.model';
import { MessagesService } from './messages.service';
import { FindManyMessageArgs } from '@app/common/generated/index/message/find-many-message.args';
import { CreateOneMessageArgs } from '@app/common/generated/index/message/create-one-message.args';
import { DeleteOneMessageArgs } from '@app/common/generated/index/message/delete-one-message.args';
import { UpdateOneMessageArgs } from '@app/common/generated/index/message/update-one-message.args';
import { FindUniqueMessageArgs } from '@app/common/generated/index/message/find-unique-message.args';
import { PubSub } from 'graphql-subscriptions';
import { UseGuards } from '@nestjs/common';
import { CurrentUser, GqlAuthGuard } from '../auth/guards/graph-auth.guard';
import { User } from '@app/common/generated/index/user/user.model';

@Resolver(() => Message)
export class MessagesResolver {
  private pubSub = new PubSub();
  constructor(private readonly messagesService: MessagesService) {}

  @Query(() => Message)
  async findAllMessages(
    @Args() messageFindManyArgs: FindManyMessageArgs,
    @Info() info,
  ) {
    try {
      const messages = new PrismaSelect(info).value;
      return this.messagesService.findAll({
        ...messageFindManyArgs,
        ...messages,
      });
    } catch (error) {
      console.error(error);
    }
  }

  @Mutation(() => Message)
  async findOneMessage(
    @Args() messageFindUnique: FindUniqueMessageArgs,
    @Info() info,
  ) {
    try {
      const message = new PrismaSelect(info).value;
      return this.messagesService.findOne({ ...messageFindUnique, ...message });
    } catch (error) {
      console.error(error);
    }
  }

  @Query(() => [Message])
  @UseGuards(GqlAuthGuard)
  findChatMessages(@CurrentUser() user: User, @Args('id') chatId: string) {
    console.log('in chat', chatId);

    return this.messagesService.findAll({ where: { id: chatId } });
  }

  @Mutation(() => Message)
  async sendMessage(
    @Args() messageCreateArgs: CreateOneMessageArgs,
    @Info() info,
  ) {
    try {
      const message = new PrismaSelect(info).value;
      const newMessage = this.messagesService.createMessage({
        ...messageCreateArgs,
        ...message,
      });
      this.pubSub.publish(`onChatMessage:${(await newMessage).chatId}`, {
        onChatMessage: newMessage,
      });
      return newMessage;
    } catch (error) {
      console.error(error);
    }
  }

  @Mutation(() => Message)
  async updateMessage(
    @Args() messageUpdateArgs: UpdateOneMessageArgs,
    @Info() info,
  ) {
    try {
      const update = new PrismaSelect(info).value;
      return this.messagesService.updateMessage({
        ...messageUpdateArgs,
        ...update,
      });
    } catch (error) {
      console.error(error);
    }
  }

  @Mutation(() => Message)
  async deleteMessage(
    @Args() messageDeletArgs: DeleteOneMessageArgs,
    @Info() info,
  ) {
    try {
      const message = new PrismaSelect(info).value;
      return this.messagesService.deleteMessage({
        ...messageDeletArgs,
        ...message,
      });
    } catch (error) {
      console.error(error);
    }
  }
  @Subscription(() => Message)
  // @UseGuards(GqlAuthGuard)
  async onChatMessage(@Args('id') chatId: string) {
    return this.pubSub.asyncIterator(`onChatMessage:${chatId}`);
  }
}
