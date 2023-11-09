import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Media } from '@app/prisma-generated/generated/nestgraphql/media/media.model';
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
} from '@aws-sdk/client-s3';
import { MediaType } from '@app/prisma-generated/generated/nestgraphql/prisma/media-type.enum';
import { handlePrismaError } from '@app/common/utils';

function determineMediaType(mimetype: string): MediaType {
  if (mimetype.startsWith('image/')) {
    return MediaType.IMAGE;
  } else if (mimetype.startsWith('video/')) {
    return MediaType.VIDEO;
  } else {
    return MediaType.OTHER;
  }
}

@Injectable()
export class MediaService {
  private readonly logger = new Logger(MediaService.name);
  private readonly s3Client = new S3Client({ region: 'your-region' }); // TODO: Please set your AWS region
  private readonly BUCKET_NAME = 'your-bucket-name'; // TODO: Please set your bucket name

  constructor(private readonly prisma: PrismaService) {}

  async createMedia(file: Express.Multer.File): Promise<Media> {
    this.logger.log('Uploading a new media');
    try {
      const uploadCommand = new PutObjectCommand({
        Bucket: this.BUCKET_NAME,
        Key: file.filename,
        Body: file.buffer,
        ContentType: file.mimetype,
      });
      await this.s3Client.send(uploadCommand);
      const mediaType = determineMediaType(file.mimetype);
      const media = await this.prisma.media.create({
        data: {
          filename: file.filename,
          url: `https://${this.BUCKET_NAME}.s3.amazonaws.com/${file.filename}`,
          contentType: file.mimetype,
          type: mediaType,
        },
      });
      return media;
    } catch (error) {
      handlePrismaError(error, 'Failed to create media');
    }
  }

  async getAllMedia(): Promise<Media[]> {
    this.logger.log('Fetching all media');
    try {
      return await this.prisma.media.findMany();
    } catch (error) {
      handlePrismaError(error, 'Failed to retrieve media');
    }
  }

  async getMediaById(id: string): Promise<Buffer> {
    this.logger.log(`Fetching media by id: ${id}`);
    try {
      const media = await this.prisma.media.findUnique({ where: { id } });
      if (!media) {
        handlePrismaError(
          new Error('Media not found'),
          'Media with provided ID not found',
        );
      }
      const getCommand = new GetObjectCommand({
        Bucket: this.BUCKET_NAME,
        Key: media.filename,
      });
      const { Body } = await this.s3Client.send(getCommand);
      if (Body instanceof Buffer) {
        return Body;
      } else {
        throw new Error('Error fetching the media content from S3.');
      }
    } catch (error) {
      handlePrismaError(error, 'Failed to fetch media by ID');
    }
  }

  async deleteMedia(id: string): Promise<Media> {
    this.logger.log(`Deleting media with id: ${id}`);
    try {
      const media = await this.prisma.media.findUnique({ where: { id } });
      if (!media) {
        handlePrismaError(
          new Error('Media not found'),
          'Media with provided ID not found',
        );
      }
      const deleteCommand = new DeleteObjectCommand({
        Bucket: this.BUCKET_NAME,
        Key: media.filename,
      });
      await this.s3Client.send(deleteCommand);
      return await this.prisma.media.delete({ where: { id } });
    } catch (error) {
      handlePrismaError(error, 'Failed to delete media');
    }
  }
}

// Rest of the utilities remains unchanged...
