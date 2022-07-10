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
import { CounselorSessionListRelationFilter } from '../counselor-session/counselor-session-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { MessageListRelationFilter } from '../message/message-list-relation-filter.input';
import { ChatRelationFilter } from '../chat/chat-relation-filter.input';

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
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    firstName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    lastName?: StringFilter;

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

    @Field(() => CounselorSessionListRelationFilter, {nullable:true})
    counselingSession?: CounselorSessionListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => MessageListRelationFilter, {nullable:true})
    Message?: MessageListRelationFilter;

    @Field(() => ChatRelationFilter, {nullable:true})
    Chat?: ChatRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    chatId?: StringNullableFilter;
}
