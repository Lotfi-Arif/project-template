import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { PostCreateNestedManyWithoutAuthorInput } from '../post/post-create-nested-many-without-author.input';
import { CounselorSessionCreateNestedManyWithoutParticipantsInput } from '../counselor-session/counselor-session-create-nested-many-without-participants.input';

@InputType()
export class UserCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => String, {nullable:true})
    mobile?: string;

    @Field(() => String, {nullable:false})
    accountStatus!: string;

    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PostCreateNestedManyWithoutAuthorInput, {nullable:true})
    posts?: PostCreateNestedManyWithoutAuthorInput;

    @Field(() => CounselorSessionCreateNestedManyWithoutParticipantsInput, {nullable:true})
    counselingSession?: CounselorSessionCreateNestedManyWithoutParticipantsInput;
}
