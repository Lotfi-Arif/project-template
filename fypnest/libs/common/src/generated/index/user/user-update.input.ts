import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PostUpdateManyWithoutAuthorInput } from '../post/post-update-many-without-author.input';
import { CounselorSessionUpdateManyWithoutParticipantsInput } from '../counselor-session/counselor-session-update-many-without-participants.input';

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

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    accountStatus?: StringFieldUpdateOperationsInput;

    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumRoleFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => PostUpdateManyWithoutAuthorInput, {nullable:true})
    posts?: PostUpdateManyWithoutAuthorInput;

    @Field(() => CounselorSessionUpdateManyWithoutParticipantsInput, {nullable:true})
    counselingSession?: CounselorSessionUpdateManyWithoutParticipantsInput;
}
