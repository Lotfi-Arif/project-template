import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from '@app/prisma-generated/generated/nestgraphql/user/user.model';
import { Logger, NotFoundException } from '@nestjs/common';
import { UserUpdateInput } from '@app/prisma-generated/generated/nestgraphql/user/user-update.input';
import { UserCreateInput } from '@app/prisma-generated/generated/nestgraphql/user/user-create.input';

@Resolver(() => User)
export class UserResolver {
  private readonly logger = new Logger(UserResolver.name);

  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async users(@Args('skip') skip?: number, @Args('take') take?: number) {
    this.logger.log(`Fetching users with skip: ${skip}, take: ${take}`);
    return this.userService.getAllUsers({ skip, take });
  }

  @Query(() => User, { nullable: true })
  async user(@Args('id') id: string) {
    this.logger.log(`Fetching user with ID: ${id}`);
    const user = await this.userService.getUserById(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  @Mutation(() => User)
  async createUser(@Args('data') data: UserCreateInput) {
    this.logger.log('Creating a new user');
    return this.userService.createUser(data);
  }

  @Mutation(() => User)
  async updateUser(
    @Args('id') id: string,
    @Args('data') data: UserUpdateInput,
  ) {
    this.logger.log(`Updating user with ID: ${id}`);
    return this.userService.updateUser({ id, data });
  }

  @Mutation(() => User)
  async deleteUser(@Args('id') id: string) {
    this.logger.log(`Deleting user with ID: ${id}`);
    return this.userService.deleteUser(id);
  }
}
