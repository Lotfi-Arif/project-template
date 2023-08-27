// media.module.ts

import { Module } from '@nestjs/common';
import { MediaService } from './media.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [MediaService],
  exports: [MediaService],
})
export class MediaModule {}
