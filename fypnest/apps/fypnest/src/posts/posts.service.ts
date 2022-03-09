import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';


@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) { }

  async findAll(postFindManyArgs: Prisma.PostFindManyArgs) {
    return this.prisma.post.findMany(postFindManyArgs);
  }
  async findOne(postFindOneArgs: Prisma.PostFindUniqueArgs) {
    return this.prisma.post.findUnique(postFindOneArgs);
  }
  async createPost(postCreateOneArgs: Prisma.PostCreateArgs) {
    return this.prisma.post.create(postCreateOneArgs);
  }
  async updatePost(postUpdateArgs: Prisma.PostUpdateArgs) {
    return this.prisma.post.update(postUpdateArgs);
  }
  async deletePost(postDeleteArgs: Prisma.PostDeleteArgs) {
    return this.prisma.post.delete(postDeleteArgs);
  }
}
