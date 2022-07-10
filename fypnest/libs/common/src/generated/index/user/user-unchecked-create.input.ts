import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Gender } from '../prisma/gender.enum';
import { AccountStatus } from '../prisma/account-status.enum';
import { Role } from '../prisma/role.enum';
import { StudentUncheckedCreateNestedOneWithoutUserInput } from '../student/student-unchecked-create-nested-one-without-user.input';
import { StaffUncheckedCreateNestedOneWithoutUserInput } from '../staff/staff-unchecked-create-nested-one-without-user.input';
import { CounselorUncheckedCreateNestedOneWithoutUserInput } from '../counselor/counselor-unchecked-create-nested-one-without-user.input';
import { AdminUncheckedCreateNestedOneWithoutUserInput } from '../admin/admin-unchecked-create-nested-one-without-user.input';
import { CounselorSessionUncheckedCreateNestedManyWithoutUserInput } from '../counselor-session/counselor-session-unchecked-create-nested-many-without-user.input';
import { MessageUncheckedCreateNestedManyWithoutSenderInput } from '../message/message-unchecked-create-nested-many-without-sender.input';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

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

    @Field(() => StudentUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    student?: StudentUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => StaffUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    staff?: StaffUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => CounselorUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    counselor?: CounselorUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => AdminUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => CounselorSessionUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    counselingSession?: CounselorSessionUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => MessageUncheckedCreateNestedManyWithoutSenderInput, {nullable:true})
    Message?: MessageUncheckedCreateNestedManyWithoutSenderInput;

    @Field(() => String, {nullable:true})
    chatId?: string;
}
