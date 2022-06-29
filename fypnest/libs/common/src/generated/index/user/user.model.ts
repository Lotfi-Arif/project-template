import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Gender } from '../prisma/gender.enum';
import { AccountStatus } from '../prisma/account-status.enum';
import { Role } from '../prisma/role.enum';
import { Student } from '../student/student.model';
import { Staff } from '../staff/staff.model';
import { Counselor } from '../counselor/counselor.model';
import { Admin } from '../admin/admin.model';
import { Post } from '../post/post.model';
import { CounselorSession } from '../counselor-session/counselor-session.model';
import { Message } from '../message/message.model';
import { Chat } from '../chat/chat.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:true})
    mobile!: string | null;

    @Field(() => Gender, {nullable:true})
    gender!: keyof typeof Gender | null;

    @Field(() => AccountStatus, {nullable:false,defaultValue:'UNVERIFIED'})
    accountStatus!: keyof typeof AccountStatus;

    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;

    @Field(() => Student, {nullable:true})
    student?: Student | null;

    @Field(() => Staff, {nullable:true})
    staff?: Staff | null;

    @Field(() => Counselor, {nullable:true})
    counselor?: Counselor | null;

    @Field(() => Admin, {nullable:true})
    admin?: Admin | null;

    @Field(() => [Post], {nullable:true})
    posts?: Array<Post>;

    @Field(() => [CounselorSession], {nullable:true})
    counselingSession?: Array<CounselorSession>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Message], {nullable:true})
    Message?: Array<Message>;

    @Field(() => Chat, {nullable:true})
    Chat?: Chat | null;

    @Field(() => String, {nullable:true})
    chatId!: string | null;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
