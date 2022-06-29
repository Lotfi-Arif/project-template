import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Gender } from '../prisma/gender.enum';
import { AccountStatus } from '../prisma/account-status.enum';
import { Role } from '../prisma/role.enum';
import { UserCountAggregate } from './user-count-aggregate.output';
import { UserMinAggregate } from './user-min-aggregate.output';
import { UserMaxAggregate } from './user-max-aggregate.output';

@ObjectType()
export class UserGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:true})
    mobile?: string;

    @Field(() => Gender, {nullable:true})
    gender?: keyof typeof Gender;

    @Field(() => AccountStatus, {nullable:false})
    accountStatus!: keyof typeof AccountStatus;

    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:true})
    chatId?: string;

    @Field(() => UserCountAggregate, {nullable:true})
    _count?: UserCountAggregate;

    @Field(() => UserMinAggregate, {nullable:true})
    _min?: UserMinAggregate;

    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: UserMaxAggregate;
}
