import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from '@app/prisma-generated/generated/nestgraphql/user/user.model';
import { Logger, NotFoundException } from '@nestjs/common';
import { handleHttpError } from '@app/common/utils';
import { CreateOneUserArgs } from '@app/prisma-generated/generated/nestgraphql/user/create-one-user.args';
import { UpdateOneUserArgs } from '@app/prisma-generated/generated/nestgraphql/user/update-one-user.args';

@Resolver(() => User)
export class UserResolver {
  private readonly logger = new Logger(UserResolver.name);

  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async users(@Args('skip') skip?: number, @Args('take') take?: number) {
    try {
      this.logger.log(`Fetching users with skip: ${skip}, take: ${take}`);
      return this.userService.getAllUsers({ skip, take });
    } catch (error) {
      this.logger.error('Failed to retrieve users', { error });
      throw handleHttpError(error, 'Failed to retrieve users');
    }
  }

  @Query(() => User, { nullable: true })
  async user(@Args('id') id: string) {
    try {
      this.logger.log(`Fetching user with ID: ${id}`);
      const user = await this.userService.getUserById(id);
      if (!user) {
        throw new NotFoundException(`User with ID ${id} not found`);
      }
      return user;
    } catch (error) {
      this.logger.error(`Failed to retrieve user with ID: ${id}`, { error });
      throw handleHttpError(error, 'Failed to retrieve user');
    }
  }

  @Mutation(() => User)
  async createUser(@Args('data') data: CreateOneUserArgs) {
    try {
      this.logger.log('Creating a new user');
      return this.userService.createUser(data);
    } catch (error) {
      this.logger.error('Failed to create a new user', { error });
      throw handleHttpError(error, 'Failed to create a new user');
    }
  }

  @Mutation(() => User)
  async updateUser(
    @Args('id') id: string,
    @Args('data') data: UpdateOneUserArgs,
  ) {
    try {
      this.logger.log(`Updating user with ID: ${id}`);
      return this.userService.updateUser({ id, data });
    } catch (error) {
      this.logger.error(`Failed to update user with ID: ${id}`, { error });
      throw handleHttpError(error, 'Failed to update user');
    }
  }

  @Mutation(() => User)
  async deleteUser(@Args('id') id: string) {
    try {
      this.logger.log(`Deleting user with ID: ${id}`);
      return this.userService.deleteUser(id);
    } catch (error) {
      this.logger.error(`Failed to delete user with ID: ${id}`, { error });
      throw handleHttpError(error, 'Failed to delete user');
    }
  }
}
