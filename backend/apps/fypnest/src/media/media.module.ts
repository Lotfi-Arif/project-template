// media.module.ts

import { Global, Module } from '@nestjs/common';
import { MediaService } from './media.service';
import { ConfigModule } from '@nestjs/config';
import { MediaResolver } from './media.resolver';
import { PrismaService } from '../prisma/prisma.service';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [MediaService, MediaResolver, PrismaService],
  exports: [MediaService],
})
export class MediaModule {}
