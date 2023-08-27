// media.resolver.ts

import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { MediaService } from './media.service';

@Resolver()
export class MediaResolver {
  constructor(private readonly mediaService: MediaService) {}

  @Mutation(() => String)
  async uploadFile(
    @Args({ name: 'file' })
    file,
  ): Promise<string> {
    const { createReadStream, filename } = await file;
    const stream = createReadStream();
    const buffer = await streamToBuffer(stream);
    return this.mediaService.uploadFile(buffer, filename);
  }

  @Query(() => String)
  async getFile(@Args('filename') filename: string): Promise<string> {
    return this.mediaService.getFile(filename);
  }

  @Mutation(() => Boolean)
  async deleteFile(@Args('filename') filename: string): Promise<boolean> {
    await this.mediaService.deleteFile(filename);
    return true;
  }

  @Query(() => [String])
  async listFiles(): Promise<string[]> {
    return this.mediaService.listFiles();
  }
}

function streamToBuffer(stream: NodeJS.ReadableStream): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: any[] = [];
    stream.on('data', (chunk) => chunks.push(chunk));
    stream.on('error', reject);
    stream.on('end', () => resolve(Buffer.concat(chunks)));
  });
}
