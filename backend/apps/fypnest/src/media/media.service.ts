// media.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class MediaService {
  private s3: S3;

  constructor(private configService: ConfigService) {
    this.s3 = new S3({
      region: this.configService.get('AWS_REGION'),
      accessKeyId: this.configService.get('AWS_ACCESS_KEY_ID'),
      secretAccessKey: this.configService.get('AWS_SECRET_ACCESS_KEY'),
    });
  }

  async uploadFile(dataBuffer: Buffer, filename: string): Promise<string> {
    const uploadResult = await this.s3
      .upload({
        Bucket: this.configService.get('AWS_S3_BUCKET_NAME'),
        Body: dataBuffer,
        Key: `${uuidv4()}-${filename}`,
      })
      .promise();

    return uploadResult.Location;
  }

  async getFile(filename: string): Promise<any> {
    try {
      const file = await this.s3
        .getObject({
          Bucket: this.configService.get('AWS_S3_BUCKET_NAME'),
          Key: filename,
        })
        .promise();

      return file.Body;
    } catch (error) {
      throw new NotFoundException(`File with name ${filename} not found`);
    }
  }

  async deleteFile(filename: string): Promise<void> {
    await this.s3
      .deleteObject({
        Bucket: this.configService.get('AWS_S3_BUCKET_NAME'),
        Key: filename,
      })
      .promise();
  }

  async listFiles(): Promise<string[]> {
    const { Contents } = await this.s3
      .listObjects({
        Bucket: this.configService.get('AWS_S3_BUCKET_NAME'),
      })
      .promise();

    if (!Contents) return [];

    return Contents.map((file) => file.Key as string);
  }
}
