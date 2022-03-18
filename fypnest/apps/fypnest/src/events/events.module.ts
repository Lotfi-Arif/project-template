import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsResolver } from './events.resolver';

@Module({
  providers: [EventsService, EventsResolver]
})
export class EventsModule {}
