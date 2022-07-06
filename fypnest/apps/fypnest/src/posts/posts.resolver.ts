import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { Post } from '@app/common/generated/index/post/post.model';
import { PostsService } from './posts.service';
import { CreateOnePostArgs } from '@app/common/generated/index/post/create-one-post.args';
import { DeleteOnePostArgs } from '@app/common/generated/index/post/delete-one-post.args';
import { FindManyPostArgs } from '@app/common/generated/index/post/find-many-post.args';
import { FindUniquePostArgs } from '@app/common/generated/index/post/find-unique-post.args';
import { UpdateOnePostArgs } from '@app/common/generated/index/post/update-one-post.args';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private readonly postService: PostsService) {}

  @Query(() => [Post])
  async findAllPosts(@Args() postFindManyArgs: FindManyPostArgs, @Info() info) {
    try {
      const posts = new PrismaSelect(info).value;
      return this.postService.findAll({ ...postFindManyArgs, ...posts });
    } catch (error) {
      console.error(error);
    }
  }

  @Query(() => Post)
  async findOnePost(@Args('id') id: string, @Info() info ) {
    try {
      const post = new PrismaSelect(info).value;
      return this.postService.findOne({ where: {id: id}, ...post });
    } catch (error) {
      console.error(error);
    }
  }

  @Mutation(() => Post)
  async createPost(@Args() postCreateArgs: CreateOnePostArgs, @Info() info) {
    try {
      const newPost = new PrismaSelect(info).value;
      return this.postService.createPost({ ...postCreateArgs, ...newPost });
    } catch (error) {
      console.error(error);
    }
  }

  @Mutation(() => Post)
  async updatePost(@Args() postUpdateArgs: UpdateOnePostArgs, @Info() info) {
    try {
      const update = new PrismaSelect(info).value;
      return this.postService.updatePost({ ...postUpdateArgs, ...update });
    } catch (error) {
      console.error(error);
    }
  }

  @Mutation(() => Post)
  async deletePost(@Args() postDeletArgs: DeleteOnePostArgs, @Info() info) {
    try {
      const post = new PrismaSelect(info).value;
      return this.postService.deletePost({ ...postDeletArgs, ...post });
    } catch (error) {
      console.error(error);
    }
  }
}
