import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumGenderNullableFilter } from '../prisma/enum-gender-nullable-filter.input';
import { EnumAccountStatusFilter } from '../prisma/enum-account-status-filter.input';
import { EnumRoleFilter } from '../prisma/enum-role-filter.input';
import { StudentRelationFilter } from '../student/student-relation-filter.input';
import { StaffRelationFilter } from '../staff/staff-relation-filter.input';
import { CounselorRelationFilter } from '../counselor/counselor-relation-filter.input';
import { AdminRelationFilter } from '../admin/admin-relation-filter.input';
import { PostListRelationFilter } from '../post/post-list-relation-filter.input';
import { CounselorSessionRelationFilter } from '../counselor-session/counselor-session-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    firstName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    lastName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    mobile?: StringNullableFilter;

    @Field(() => EnumGenderNullableFilter, {nullable:true})
    gender?: EnumGenderNullableFilter;

    @Field(() => EnumAccountStatusFilter, {nullable:true})
    accountStatus?: EnumAccountStatusFilter;

    @Field(() => EnumRoleFilter, {nullable:true})
    role?: EnumRoleFilter;

    @Field(() => StudentRelationFilter, {nullable:true})
    student?: StudentRelationFilter;

    @Field(() => StaffRelationFilter, {nullable:true})
    staff?: StaffRelationFilter;

    @Field(() => CounselorRelationFilter, {nullable:true})
    counselor?: CounselorRelationFilter;

    @Field(() => AdminRelationFilter, {nullable:true})
    admin?: AdminRelationFilter;

    @Field(() => PostListRelationFilter, {nullable:true})
    posts?: PostListRelationFilter;

    @Field(() => CounselorSessionRelationFilter, {nullable:true})
    counselingSession?: CounselorSessionRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
