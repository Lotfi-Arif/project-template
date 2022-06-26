import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableEnumGenderFieldUpdateOperationsInput } from '../prisma/nullable-enum-gender-field-update-operations.input';
import { EnumAccountStatusFieldUpdateOperationsInput } from '../prisma/enum-account-status-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { StudentUpdateOneWithoutUserInput } from '../student/student-update-one-without-user.input';
import { StaffUpdateOneWithoutUserInput } from '../staff/staff-update-one-without-user.input';
import { CounselorUpdateOneWithoutUserInput } from '../counselor/counselor-update-one-without-user.input';
import { AdminUpdateOneWithoutUserInput } from '../admin/admin-update-one-without-user.input';
import { PostUpdateManyWithoutAuthorInput } from '../post/post-update-many-without-author.input';
import { CounselorSessionUpdateOneWithoutUserInput } from '../counselor-session/counselor-session-update-one-without-user.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class UserUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    mobile?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableEnumGenderFieldUpdateOperationsInput, {nullable:true})
    gender?: NullableEnumGenderFieldUpdateOperationsInput;

    @Field(() => EnumAccountStatusFieldUpdateOperationsInput, {nullable:true})
    accountStatus?: EnumAccountStatusFieldUpdateOperationsInput;

    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumRoleFieldUpdateOperationsInput;

    @Field(() => StudentUpdateOneWithoutUserInput, {nullable:true})
    student?: StudentUpdateOneWithoutUserInput;

    @Field(() => StaffUpdateOneWithoutUserInput, {nullable:true})
    staff?: StaffUpdateOneWithoutUserInput;

    @Field(() => CounselorUpdateOneWithoutUserInput, {nullable:true})
    counselor?: CounselorUpdateOneWithoutUserInput;

    @Field(() => AdminUpdateOneWithoutUserInput, {nullable:true})
    admin?: AdminUpdateOneWithoutUserInput;

    @Field(() => PostUpdateManyWithoutAuthorInput, {nullable:true})
    posts?: PostUpdateManyWithoutAuthorInput;

    @Field(() => CounselorSessionUpdateOneWithoutUserInput, {nullable:true})
    counselingSession?: CounselorSessionUpdateOneWithoutUserInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
