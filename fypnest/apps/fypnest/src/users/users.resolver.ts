import { Args, Info, Query, Resolver } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { User } from '@app/common/generated/index/user/user.model';
import { UsersService } from './users.service';
import { FindManyUserArgs } from '@app/common/generated/index/user/find-many-user.args';
import { CreateOneUserArgs } from '@app/common/generated/index/user/create-one-user.args';

//normal setup - resolver and service
// prisma select
// how to modify nestjs-prisma-graphql
// postgresql


/*
  query {
     name
     mobile
     password
    }
  }
*/


/*
  query {
    users{
     name
     mobile
     password
     //! cannot be queried unless we do a left join or an additional prisma.findMany
     transactions{
     id
    
     updatedAt
     }
    }
  }
*/
@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {
  }

  @Query(() => [User])
  findAll(@Args() userFindManyArgs: FindManyUserArgs, @Info() info) {
    const select = new PrismaSelect(info).value
    return this.usersService.findAll({ ...userFindManyArgs, ...select })
  }


  createUser(@Args() userCreateArgs: CreateOneUserArgs) { }





}