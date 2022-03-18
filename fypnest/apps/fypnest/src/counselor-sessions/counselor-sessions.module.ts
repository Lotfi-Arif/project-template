import { Module } from '@nestjs/common';
import { CounselorSessionsService } from './counselor-sessions.service';
import { CounselorSessionsResolver } from './counselor-sessions.resolver';

@Module({
  controllers: [CounselorSessionsResolver],
  providers: [CounselorSessionsService]
})
export class CounselorSessionsModule {}
