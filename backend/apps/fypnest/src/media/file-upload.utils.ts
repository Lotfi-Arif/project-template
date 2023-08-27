import {
  MulterModuleOptions,
  MulterOptionsFactory,
} from '@nestjs/platform-express';
import { Injectable } from '@nestjs/common';
import * as multer from 'multer';
import * as path from 'path';

@Injectable()
export class FileUploadConfigService implements MulterOptionsFactory {
  createMulterOptions(): MulterModuleOptions {
    return {
      storage: multer.diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix = `${Date.now()}-${path.extname(
            file.originalname,
          )}`;
          callback(null, `${file.fieldname}-${uniqueSuffix}`);
        },
      }),
    };
  }
}
