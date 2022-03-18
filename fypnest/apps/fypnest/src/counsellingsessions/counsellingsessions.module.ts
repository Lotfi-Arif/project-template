import { Module } from '@nestjs/common';
import { CounsellingsessionsService } from './counsellingsessions.service';
import { CounsellingsessionsController } from './counsellingsessions.controller';

@Module({
  controllers: [CounsellingsessionsController],
  providers: [CounsellingsessionsService]
})
export class CounsellingsessionsModule {}
