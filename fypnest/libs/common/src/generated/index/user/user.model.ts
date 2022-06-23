import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Gender } from '../prisma/gender.enum';
import { AccountStatus } from '../prisma/account-status.enum';
import { Role } from '../prisma/role.enum';
import { Admin } from '../admin/admin.model';
import { Counselor } from '../counselor/counselor.model';
import { CounselorSession } from '../counselor-session/counselor-session.model';
import { Post } from '../post/post.model';
import { Staff } from '../staff/staff.model';
import { Student } from '../student/student.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    password!: string | null;

    @Field(() => String, {nullable:true})
    mobile!: string | null;

    @Field(() => Gender, {nullable:true})
    gender!: keyof typeof Gender | null;

    @Field(() => AccountStatus, {nullable:false,defaultValue:'UNVERIFIED'})
    accountStatus!: keyof typeof AccountStatus;

    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Admin, {nullable:true})
    admin?: Admin | null;

    @Field(() => Counselor, {nullable:true})
    counselor?: Counselor | null;

    @Field(() => CounselorSession, {nullable:true})
    counselingSession?: CounselorSession | null;

    @Field(() => [Post], {nullable:true})
    posts?: Array<Post>;

    @Field(() => Staff, {nullable:true})
    staff?: Staff | null;

    @Field(() => Student, {nullable:true})
    student?: Student | null;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
