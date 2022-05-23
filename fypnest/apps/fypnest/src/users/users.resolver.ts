import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { User } from '@app/common/generated/index/user/user.model';
import { UsersService } from './users.service';
import { FindManyUserArgs } from '@app/common/generated/index/user/find-many-user.args';
import { CreateOneUserArgs } from '@app/common/generated/index/user/create-one-user.args';
import console from 'console';
import { FindUniqueUserArgs } from '@app/common/generated/index/user/find-unique-user.args';
import { UpdateOneUserArgs } from '@app/common/generated/index/user/update-one-user.args';
import { DeleteOneUserArgs } from '@app/common/generated/index/user/delete-one-user.args';


@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {
  }

  @Query(() => [User])
  async findAllUsers(@Args() userFindManyArgs: FindManyUserArgs, @Info() info) {
    try {
      const users = new PrismaSelect(info).value
      return this.usersService.findAll({ ...userFindManyArgs, ...users })
    } catch (error) {
      console.error(error);
    }

  }

  // @Query(() => User)
  // async me(@Args() user: User, @Info() info) {
  //   const select = new PrismaSelect(info).value;
  //   return await this.usersService.getMe(user.id, select);
  // }

  @Mutation(() => User)
  async findOneUser(@Args() userFindUnique: FindUniqueUserArgs, @Info() info) {
    try {
      const user = new PrismaSelect(info).value;
      return this.usersService.findOne({ ...userFindUnique, ...user })
    } catch (error) {
      console.error(error);
    }
  }

  @Mutation(() => User)
  async createUser(@Args() userCreateArgs: CreateOneUserArgs, @Info() info) {
    try {
      const newUser = new PrismaSelect(info).value;
      return this.usersService.createUser({ ...userCreateArgs, ...newUser })
    } catch (error) {
      console.error(error);
    }
  }

  @Mutation(() => User)
  async updateUser(@Args() userUpdateArgs: UpdateOneUserArgs, @Info() info) {
    try {
      const update = new PrismaSelect(info).value;
      return this.usersService.updateUser({ ...userUpdateArgs, ...update })
    } catch (error) {
      console.error(error);
    }
  }

  @Mutation(() => User)
  async deleteUser(@Args() userDeletArgs: DeleteOneUserArgs, @Info() info) {
    try {
      const deleteUser = new PrismaSelect(info).value;
      return this.usersService.updateUser({ ...userDeletArgs, ...deleteUser })
    } catch (error) {
      console.error(error);
    }
  }
}