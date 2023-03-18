import { Module } from '@nestjs/common';
import { MediaService } from './media.service';
import { PrismaModule } from '../prisma/prisma.module';
import { MulterModule } from '@nestjs/platform-express';
import { FileUploadConfigService } from './file-upload.utils';

@Module({
  imports: [
    PrismaModule,
    MulterModule.registerAsync({
      useClass: FileUploadConfigService,
    }),
  ],
  providers: [MediaService, FileUploadConfigService],
  exports: [MediaService],
})
export class MediaModule {}
