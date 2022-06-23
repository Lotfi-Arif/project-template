import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableEnumGenderFieldUpdateOperationsInput } from '../prisma/nullable-enum-gender-field-update-operations.input';
import { EnumAccountStatusFieldUpdateOperationsInput } from '../prisma/enum-account-status-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { AdminUpdateOneWithoutUserInput } from '../admin/admin-update-one-without-user.input';
import { CounselorUpdateOneWithoutUserInput } from '../counselor/counselor-update-one-without-user.input';
import { CounselorSessionUpdateOneWithoutUserInput } from '../counselor-session/counselor-session-update-one-without-user.input';
import { PostUpdateManyWithoutAuthorInput } from '../post/post-update-many-without-author.input';
import { StaffUpdateOneWithoutUserInput } from '../staff/staff-update-one-without-user.input';
import { StudentUpdateOneWithoutUserInput } from '../student/student-update-one-without-user.input';

@InputType()
export class UserUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    password?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    mobile?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableEnumGenderFieldUpdateOperationsInput, {nullable:true})
    gender?: NullableEnumGenderFieldUpdateOperationsInput;

    @Field(() => EnumAccountStatusFieldUpdateOperationsInput, {nullable:true})
    accountStatus?: EnumAccountStatusFieldUpdateOperationsInput;

    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumRoleFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => AdminUpdateOneWithoutUserInput, {nullable:true})
    admin?: AdminUpdateOneWithoutUserInput;

    @Field(() => CounselorUpdateOneWithoutUserInput, {nullable:true})
    counselor?: CounselorUpdateOneWithoutUserInput;

    @Field(() => CounselorSessionUpdateOneWithoutUserInput, {nullable:true})
    counselingSession?: CounselorSessionUpdateOneWithoutUserInput;

    @Field(() => PostUpdateManyWithoutAuthorInput, {nullable:true})
    posts?: PostUpdateManyWithoutAuthorInput;

    @Field(() => StaffUpdateOneWithoutUserInput, {nullable:true})
    staff?: StaffUpdateOneWithoutUserInput;

    @Field(() => StudentUpdateOneWithoutUserInput, {nullable:true})
    student?: StudentUpdateOneWithoutUserInput;
}
