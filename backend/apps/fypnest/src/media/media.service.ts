import { Injectable, Logger, NotFoundException } from '@nestjs/common';
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

  /**
   * Uploads a media file to AWS S3 and creates a Media record.
   * @param file - The file to upload.
   * @returns The created Media record.
   */
  async createMedia(file: Express.Multer.File): Promise<Media> {
    this.logger.log('Attempting to upload a new media file');
    try {
      const uploadCommand = new PutObjectCommand({
        Bucket: this.BUCKET_NAME,
        Key: file.filename,
        Body: file.buffer,
        ContentType: file.mimetype,
      });
      await this.s3Client.send(uploadCommand);
      const mediaType = determineMediaType(file.mimetype);

      return await this.prisma.media.create({
        data: {
          filename: file.filename,
          url: `https://${this.BUCKET_NAME}.s3.amazonaws.com/${file.filename}`,
          contentType: file.mimetype,
          type: mediaType,
        },
      });
    } catch (error) {
      this.logger.error('Error uploading media file', { error });
      handlePrismaError(error, 'Failed to upload media');
    }
  }

  /**
   * Fetches all media records.
   * @returns An array of Media records.
   */
  async getAllMedia(): Promise<Media[]> {
    this.logger.log('Fetching all media files');
    try {
      return await this.prisma.media.findMany();
    } catch (error) {
      this.logger.error('Error fetching media files', { error });
      handlePrismaError(error, 'Failed to retrieve media');
    }
  }

  /**
   * Fetches a media record by its ID and retrieves the file content from S3.
   * @param id - The ID of the media record.
   * @returns The media file content as a Buffer.
   * @throws NotFoundException if the media record is not found.
   */
  async getMediaById(id: string): Promise<Buffer> {
    this.logger.log(`Fetching media with ID: ${id}`);
    try {
      const media = await this.prisma.media.findUnique({ where: { id } });
      if (!media) {
        this.logger.warn(`Media not found with ID: ${id}`);
        throw new NotFoundException(`Media not found with ID: ${id}`);
      }

      const getCommand = new GetObjectCommand({
        Bucket: this.BUCKET_NAME,
        Key: media.filename,
      });

      const { Body } = await this.s3Client.send(getCommand);
      if (Body instanceof Buffer) {
        return Body;
      } else {
        throw new Error('Error fetching media content from S3');
      }
    } catch (error) {
      this.logger.error(`Error fetching media with ID: ${id}`, { error });
      handlePrismaError(error, 'Failed to fetch media by ID');
    }
  }

  /**
   * Deletes a media record and its corresponding file in S3.
   * @param id - The ID of the media record to delete.
   * @returns The deleted Media record.
   * @throws NotFoundException if the media record is not found.
   */
  async deleteMedia(id: string): Promise<Media> {
    this.logger.log(`Attempting to delete media with ID: ${id}`);
    try {
      return await this.prisma.$transaction(async (prisma) => {
        const media = await prisma.media.findUnique({ where: { id } });
        if (!media) {
          this.logger.warn(`Media not found with ID: ${id}`);
          throw new NotFoundException(`Media not found with ID: ${id}`);
        }

        const deleteCommand = new DeleteObjectCommand({
          Bucket: this.BUCKET_NAME,
          Key: media.filename,
        });
        await this.s3Client.send(deleteCommand);

        return await prisma.media.delete({ where: { id } });
      });
    } catch (error) {
      this.logger.error(`Error deleting media with ID: ${id}`, { error });
      handlePrismaError(error, 'Failed to delete media');
    }
  }
}
