import { Module } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ChatsResolver } from './chats.resolver';

@Module({
  controllers: [ChatsResolver],
  providers: [ChatsService]
})
export class ChatsModule {}
