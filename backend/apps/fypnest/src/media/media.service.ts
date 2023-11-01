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
  private readonly s3Client = new S3Client({ region: 'your-region' }); // Please set your AWS region
  private readonly BUCKET_NAME = 'your-bucket-name'; // Please set your bucket name

  constructor(private readonly prisma: PrismaService) {}

  /**
   * Uploads media to S3 and then creates a Media record.
   * @param file - The file to be uploaded.
   * @returns The created media's details.
   */
  async createMedia(file: Express.Multer.File): Promise<Media> {
    this.logger.log('Uploading a new media');

    // Upload the file to S3
    const uploadCommand = new PutObjectCommand({
      Bucket: this.BUCKET_NAME,
      Key: file.filename, // This should be unique
      Body: file.buffer,
      ContentType: file.mimetype,
    });
    await this.s3Client.send(uploadCommand);

    // Determine the media type
    const mediaType = determineMediaType(file.mimetype);

    // Create a record in the database
    const media = await this.prisma.media.create({
      data: {
        filename: file.filename,
        url: `https://${this.BUCKET_NAME}.s3.amazonaws.com/${file.filename}`,
        contentType: file.mimetype,
        type: mediaType,
      },
    });
    return media;
  }

  /**
   * Retrieve all media records.
   * @returns List of media records.
   */
  async getAllMedia(): Promise<Media[]> {
    this.logger.log('Fetching all media');
    return this.prisma.media.findMany();
  }

  /**
   * Retrieve a media by its ID and fetches its content from S3.
   * @param id - Media record ID.
   * @returns The media content.
   */
  async getMediaById(id: string): Promise<Buffer> {
    this.logger.log(`Fetching media by id: ${id}`);
    const media = await this.prisma.media.findUnique({ where: { id } });
    if (!media) {
      throw new NotFoundException(`Media with ID ${id} not found`);
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
  }

  /**
   * Delete a media by its ID and removes its content from S3.
   * @param id - Media record ID.
   * @returns The deleted media's details.
   */
  async deleteMedia(id: string): Promise<Media> {
    this.logger.log(`Deleting media with id: ${id}`);
    const media = await this.prisma.media.findUnique({ where: { id } });
    if (!media) {
      throw new NotFoundException(`Media with ID ${id} not found`);
    }

    const deleteCommand = new DeleteObjectCommand({
      Bucket: this.BUCKET_NAME,
      Key: media.filename,
    });
    await this.s3Client.send(deleteCommand);

    return this.prisma.media.delete({ where: { id } });
  }

  // NOTE: For simplicity, I've skipped the update operation since media files (like images) are typically immutable.
  // If an update is necessary, it would involve a combination of the delete and create operations.
}
