import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MediaService } from './media.service';
import { Media } from '@app/prisma-generated/generated/nestgraphql/media/media.model';
import { Logger, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { handleHttpError } from '@app/common/utils';

@Resolver(() => Media)
export class MediaResolver {
  private readonly logger = new Logger(MediaResolver.name);

  constructor(private readonly mediaService: MediaService) {}

  @Query(() => [Media])
  async media() {
    this.logger.log('Fetching all media records');
    try {
      return await this.mediaService.getAllMedia();
    } catch (error) {
      this.logger.error('Failed to retrieve media records', { error });
      throw handleHttpError(error);
    }
  }

  @Query(() => Buffer, { nullable: true })
  async mediaContent(@Args('id') id: string) {
    this.logger.log(`Fetching media content with ID: ${id}`);
    try {
      return await this.mediaService.getMediaById(id);
    } catch (error) {
      this.logger.error(`Failed to retrieve media content with ID: ${id}`, {
        error,
      });
      throw handleHttpError(error);
    }
  }

  @Mutation(() => Media)
  @UseInterceptors(FileInterceptor('file'))
  async uploadMedia(@UploadedFile() file: Express.Multer.File) {
    this.logger.log('Uploading a new media');
    try {
      return await this.mediaService.createMedia(file);
    } catch (error) {
      this.logger.error('Failed to upload media', { error });
      throw handleHttpError(error);
    }
  }

  @Mutation(() => Media)
  async deleteMedia(@Args('id') id: string) {
    this.logger.log(`Deleting media with ID: ${id}`);
    try {
      return await this.mediaService.deleteMedia(id);
    } catch (error) {
      this.logger.error(`Failed to delete media with ID: ${id}`, { error });
      throw handleHttpError(error);
    }
  }
}
