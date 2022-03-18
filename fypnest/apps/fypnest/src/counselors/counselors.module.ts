import { Module } from '@nestjs/common';
import { CounselorsService } from './counselors.service';
import { CounselorsResolver } from './counselors.resolver';

@Module({
  providers: [CounselorsService, CounselorsResolver]
})
export class CounsellorsModule {}
