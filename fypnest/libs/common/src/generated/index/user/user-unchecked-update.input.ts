import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableEnumGenderFieldUpdateOperationsInput } from '../prisma/nullable-enum-gender-field-update-operations.input';
import { EnumAccountStatusFieldUpdateOperationsInput } from '../prisma/enum-account-status-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { StudentUncheckedUpdateOneWithoutUserInput } from '../student/student-unchecked-update-one-without-user.input';
import { StaffUncheckedUpdateOneWithoutUserInput } from '../staff/staff-unchecked-update-one-without-user.input';
import { CounselorUncheckedUpdateOneWithoutUserInput } from '../counselor/counselor-unchecked-update-one-without-user.input';
import { AdminUncheckedUpdateOneWithoutUserInput } from '../admin/admin-unchecked-update-one-without-user.input';
import { PostUncheckedUpdateManyWithoutAuthorInput } from '../post/post-unchecked-update-many-without-author.input';
import { CounselorSessionUncheckedUpdateManyWithoutUserInput } from '../counselor-session/counselor-session-unchecked-update-many-without-user.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MessageUncheckedUpdateManyWithoutSenderInput } from '../message/message-unchecked-update-many-without-sender.input';

@InputType()
export class UserUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    mobile?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableEnumGenderFieldUpdateOperationsInput, {nullable:true})
    gender?: NullableEnumGenderFieldUpdateOperationsInput;

    @Field(() => EnumAccountStatusFieldUpdateOperationsInput, {nullable:true})
    accountStatus?: EnumAccountStatusFieldUpdateOperationsInput;

    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumRoleFieldUpdateOperationsInput;

    @Field(() => StudentUncheckedUpdateOneWithoutUserInput, {nullable:true})
    student?: StudentUncheckedUpdateOneWithoutUserInput;

    @Field(() => StaffUncheckedUpdateOneWithoutUserInput, {nullable:true})
    staff?: StaffUncheckedUpdateOneWithoutUserInput;

    @Field(() => CounselorUncheckedUpdateOneWithoutUserInput, {nullable:true})
    counselor?: CounselorUncheckedUpdateOneWithoutUserInput;

    @Field(() => AdminUncheckedUpdateOneWithoutUserInput, {nullable:true})
    admin?: AdminUncheckedUpdateOneWithoutUserInput;

    @Field(() => PostUncheckedUpdateManyWithoutAuthorInput, {nullable:true})
    posts?: PostUncheckedUpdateManyWithoutAuthorInput;

    @Field(() => CounselorSessionUncheckedUpdateManyWithoutUserInput, {nullable:true})
    counselingSession?: CounselorSessionUncheckedUpdateManyWithoutUserInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => MessageUncheckedUpdateManyWithoutSenderInput, {nullable:true})
    Message?: MessageUncheckedUpdateManyWithoutSenderInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    chatId?: NullableStringFieldUpdateOperationsInput;
}
