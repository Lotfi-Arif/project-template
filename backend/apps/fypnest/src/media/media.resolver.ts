import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MediaService } from './media.service';
import { Media } from '@app/prisma-generated/generated/nestgraphql/media/media.model';
import { Logger, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Resolver(() => Media)
export class MediaResolver {
  private readonly logger = new Logger(MediaResolver.name);

  constructor(private readonly mediaService: MediaService) {}

  @Query(() => [Media])
  async media() {
    this.logger.log('Fetching all media records');
    return this.mediaService.getAllMedia();
  }

  @Query(() => Buffer, { nullable: true })
  async mediaContent(@Args('id') id: string) {
    this.logger.log(`Fetching media content with ID: ${id}`);
    return this.mediaService.getMediaById(id);
  }

  @Mutation(() => Media)
  @UseInterceptors(FileInterceptor('file'))
  async uploadMedia(@UploadedFile() file: Express.Multer.File) {
    this.logger.log('Uploading a new media');
    return this.mediaService.createMedia(file);
  }

  @Mutation(() => Media)
  async deleteMedia(@Args('id') id: string) {
    this.logger.log(`Deleting media with ID: ${id}`);
    return this.mediaService.deleteMedia(id);
  }
}
