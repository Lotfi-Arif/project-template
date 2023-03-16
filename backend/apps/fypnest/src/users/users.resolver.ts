import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { UsersService } from './users.service';
import { User } from 'libs/prisma/src/generated/nestgraphql/user/user.model';
import console from 'console';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User])
  async findAllUsers(
    @Info() info,
    @Args('skip', { nullable: true }) skip?: number,
    @Args('take', { nullable: true }) take?: number,
  ) {
    try {
      const users = new PrismaSelect(info).value;
      return this.usersService.getUsers({ skip, take, ...users });
    } catch (error) {
      console.error(error);
    }
  }

  @Query(() => User)
  async findOneUser(@Args('id') id: string) {
    try {
      return this.usersService.getUserById(id);
    } catch (error) {
      console.error(error);
    }
  }

  @Mutation(() => User)
  async updateUser(@Args('id') id: string, @Args('data') data, @Info() info) {
    try {
      const update = new PrismaSelect(info).value;
      return this.usersService.updateUser({ id, data: { ...data, ...update } });
    } catch (error) {
      console.error(error);
    }
  }

  async deleteUser(@Args('id') id: string) {
    try {
      return this.usersService.deleteUser(id);
    } catch (error) {
      console.error(error);
    }
  }
}
