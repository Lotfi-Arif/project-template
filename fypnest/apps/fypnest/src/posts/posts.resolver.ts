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
  constructor(private readonly postService: PostsService) {
  }

  @Query(() => [Post])
  async findAll(@Args() postFindManyArgs: FindManyPostArgs, @Info() info) {

  }

  @Mutation(() => Post)
  async findOne(@Args() postFindUnique: FindUniquePostArgs, @Info() info) {
   
  }

  @Mutation(() => Post)
  async create(@Args() postCreateArgs: CreateOnePostArgs, @Info() info) {
    
  }

  @Mutation(() => Post)
  async update(@Args() postUpdateArgs: UpdateOnePostArgs, @Info() info) {
    
  }

  @Mutation(() => Post)
  async delete(@Args() postDeletArgs: DeleteOnePostArgs, @Info() info) {
    
  }
}