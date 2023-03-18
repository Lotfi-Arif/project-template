// // media.resolver.ts
// import { Resolver, Query, Mutation, Args, ID, Int } from '@nestjs/graphql';
// import { Logger } from '@nestjs/common';
// import { MediaService } from './media.service';
// import { Media } from '@app/prisma-generated/generated/nestgraphql/media/media.model';
// import { UseGuards, UseInterceptors } from '@nestjs/common';
// import { FileInterceptor } from '@nestjs/platform-express';
// import { GraphQLUpload, FileUpload } from 'graphql-upload';

// @Resolver((of) => Media)
// export class MediaResolver {
//   private readonly logger = new Logger(MediaResolver.name);

//   constructor(private readonly mediaService: MediaService) {}

//   @Query((returns) => [Media])
//   async getMedias(
//     @Args('skip', { type: () => Int, nullable: true }) skip?: number,
//     @Args('take', { type: () => Int, nullable: true }) take?: number,
//   ): Promise<Media[]> {
//     this.logger.log(`Getting medias with skip: ${skip}, take: ${take}`);
//     return this.mediaService.getMedias({ skip, take });
//   }

//   @Query((returns) => Media, { nullable: true })
//   async getMediaById(
//     @Args('id', { type: () => ID }) id: string,
//   ): Promise<Media | null> {
//     this.logger.log(`Getting media by id: ${id}`);
//     return this.mediaService.getMediaById(id);
//   }

//   @Mutation((returns) => Media)
//   @UseInterceptors(FileInterceptor('file'))
//   async createMedia(
//     @Args({ name: 'file', type: () => GraphQLUpload })
//     file: FileUpload,
//   ): Promise<Media> {
//     this.logger.log(`Creating media from file: ${JSON.stringify(file)}`);
//     return this.mediaService.createMediaFromFile(file);
//   }

//   @Mutation((returns) => Media)
//   async deleteMedia(
//     @Args('id', { type: () => ID }) id: string,
//   ): Promise<Media> {
//     this.logger.log(`Deleting media by id: ${id}`);
//     return this.mediaService.deleteMedia(id);
//   }
// }
