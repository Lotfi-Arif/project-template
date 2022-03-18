import { Module } from '@nestjs/common';
import { CounsellorsService } from './counsellors.service';
import { CounsellorsController } from './counsellors.controller';

@Module({
  controllers: [CounsellorsController],
  providers: [CounsellorsService]
})
export class CounsellorsModule {}
