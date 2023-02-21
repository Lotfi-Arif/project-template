import { Args, Info, Mutation, Resolver } from '@nestjs/graphql';
import { User } from '@app/common/generated/index/user/user.model';
import { UsersService } from './users.service';

@Resolver(() => User)
export class AdminUsersResolver {
  constructor(private readonly usersService: UsersService) {}

  // @Mutation(() => User)
  // async createUser() {}
  // @Mutation(() => User)
  // async updateUser() {}
}
