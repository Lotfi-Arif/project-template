import { Module } from '@nestjs/common';
import { SchedulesService } from './schedules.service';
import { SchedulesResolver } from './schedules.resolver';

@Module({
  providers: [SchedulesService, SchedulesResolver]
})
export class SchedulesModule {}
