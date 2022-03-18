import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesResolver } from './messages.resolver';

@Module({
  providers: [MessagesService, MessagesResolver]
})
export class MessagesModule {}
