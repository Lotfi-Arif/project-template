// media.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Media, MediaType } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import * as fs from 'fs';
import * as path from 'path';
import { Express } from 'express';

@Injectable()
export class MediaService {
  private readonly logger = new Logger(MediaService.name);
  private readonly uploadDir = './uploads';

  constructor(private prisma: PrismaService) {
    this.ensureUploadDirectoryExists();
  }

  private ensureUploadDirectoryExists(): void {
    if (!fs.existsSync(this.uploadDir)) {
      fs.mkdirSync(this.uploadDir);
    }
  }

  async createMediaFromFile(file: Express.Multer.File): Promise<Media> {
    this.logger.log(`Creating media from file: ${JSON.stringify(file)}`);

    const mediaType = this.detectMediaType(file.mimetype);
    if (!mediaType) {
      throw new Error(`Unsupported media type: ${file.mimetype}`);
    }

    const fileId = uuidv4();
    const filePath = path.join(this.uploadDir, fileId);
    fs.writeFileSync(filePath, file.buffer);

    const media = await this.prisma.media.create({
      data: {
        id: fileId,
        type: mediaType,
        url: `/media/${fileId}`,
        course: { connect: { id: file.fieldname } },
      },
    });

    return media;
  }

  private detectMediaType(mimeType: string): MediaType | null {
    const typeMapping: Record<string, MediaType> = {
      'image/jpeg': MediaType.IMAGE,
      'image/png': MediaType.IMAGE,
      'image/gif': MediaType.IMAGE,
      'video/mp4': MediaType.VIDEO,
      'audio/mpeg': MediaType.AUDIO,
      'application/pdf': MediaType.DOCUMENT,
    };
    return typeMapping[mimeType] || null;
  }

  async getMediaById(id: string): Promise<Media | null> {
    this.logger.log(`Getting media by id: ${id}`);
    return this.prisma.media.findUnique({ where: { id } });
  }

  async getMediaContent(id: string): Promise<Buffer | null> {
    this.logger.log(`Getting media content by id: ${id}`);
    const media = await this.getMediaById(id);

    if (media) {
      const filePath = path.join(this.uploadDir, media.id);
      if (fs.existsSync(filePath)) {
        return fs.readFileSync(filePath);
      }
    }

    return null;
  }

  async deleteMedia(id: string): Promise<Media> {
    this.logger.log(`Deleting media by id: ${id}`);
    const media = await this.prisma.media.delete({ where: { id } });

    const filePath = path.join(this.uploadDir, media.id);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    return media;
  }

  async getMedias(params: { skip?: number; take?: number }): Promise<Media[]> {
    const { skip, take } = params;
    this.logger.log(`Getting medias with skip: ${skip}, take: ${take}`);
    return this.prisma.media.findMany({ skip, take });
  }
}
