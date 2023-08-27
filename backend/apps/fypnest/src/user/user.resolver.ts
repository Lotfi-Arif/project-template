import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from '@app/prisma-generated/generated/nestgraphql/user/user.model';
import { Logger } from '@nestjs/common';
import { UserUpdateInput } from '@app/prisma-generated/generated/nestgraphql/user/user-update.input';

@Resolver(() => User)
export class UserResolver {
  private readonly logger = new Logger(UserResolver.name);

  constructor(private readonly userService: UserService) {}

  @Query(() => User, { nullable: true })
  async user(@Args('id') id: string) {
    this.logger.log(`Fetching user with ID: ${id}`);
    const user = await this.userService.getUserById(id);
    return user;
  }

  @Query(() => [User])
  async users(@Args('skip') skip?: number, @Args('take') take?: number) {
    this.logger.log(`Fetching users with skip: ${skip}, take: ${take}`);
    const users = await this.userService.getUsers({ skip, take });
    return users;
  }

  @Mutation(() => User)
  async createUser(
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    this.logger.log(`Creating user with email: ${email}`);
    const newUser = await this.userService.createUser({ email, password });
    return newUser;
  }

  @Mutation(() => User)
  async updateUser(
    @Args('id') id: string,
    @Args('data') data: UserUpdateInput,
  ) {
    this.logger.log(`Updating user with ID: ${id}`);
    const updatedUser = await this.userService.updateUser({ id, data });
    return updatedUser;
  }

  @Mutation(() => User)
  async deleteUser(@Args('id') id: string) {
    this.logger.log(`Deleting user with ID: ${id}`);
    const deletedUser = await this.userService.deleteUser(id);
    return deletedUser;
  }
}
