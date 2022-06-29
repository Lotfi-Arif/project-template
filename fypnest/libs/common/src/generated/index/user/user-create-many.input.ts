import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Gender } from '../prisma/gender.enum';
import { AccountStatus } from '../prisma/account-status.enum';
import { Role } from '../prisma/role.enum';

@InputType()
export class UserCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:true})
    mobile?: string;

    @Field(() => Gender, {nullable:true})
    gender?: keyof typeof Gender;

    @Field(() => AccountStatus, {nullable:true})
    accountStatus?: keyof typeof AccountStatus;

    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    chatId?: string;
}
