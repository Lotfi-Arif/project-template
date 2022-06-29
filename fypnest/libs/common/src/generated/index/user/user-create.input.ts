import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Gender } from '../prisma/gender.enum';
import { AccountStatus } from '../prisma/account-status.enum';
import { Role } from '../prisma/role.enum';
import { StudentCreateNestedOneWithoutUserInput } from '../student/student-create-nested-one-without-user.input';
import { StaffCreateNestedOneWithoutUserInput } from '../staff/staff-create-nested-one-without-user.input';
import { CounselorCreateNestedOneWithoutUserInput } from '../counselor/counselor-create-nested-one-without-user.input';
import { AdminCreateNestedOneWithoutUserInput } from '../admin/admin-create-nested-one-without-user.input';
import { PostCreateNestedManyWithoutAuthorInput } from '../post/post-create-nested-many-without-author.input';
import { CounselorSessionCreateNestedManyWithoutUserInput } from '../counselor-session/counselor-session-create-nested-many-without-user.input';
import { MessageCreateNestedManyWithoutSenderInput } from '../message/message-create-nested-many-without-sender.input';
import { ChatCreateNestedOneWithoutUsersInput } from '../chat/chat-create-nested-one-without-users.input';

@InputType()
export class UserCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

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

    @Field(() => StudentCreateNestedOneWithoutUserInput, {nullable:true})
    student?: StudentCreateNestedOneWithoutUserInput;

    @Field(() => StaffCreateNestedOneWithoutUserInput, {nullable:true})
    staff?: StaffCreateNestedOneWithoutUserInput;

    @Field(() => CounselorCreateNestedOneWithoutUserInput, {nullable:true})
    counselor?: CounselorCreateNestedOneWithoutUserInput;

    @Field(() => AdminCreateNestedOneWithoutUserInput, {nullable:true})
    admin?: AdminCreateNestedOneWithoutUserInput;

    @Field(() => PostCreateNestedManyWithoutAuthorInput, {nullable:true})
    posts?: PostCreateNestedManyWithoutAuthorInput;

    @Field(() => CounselorSessionCreateNestedManyWithoutUserInput, {nullable:true})
    counselingSession?: CounselorSessionCreateNestedManyWithoutUserInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => MessageCreateNestedManyWithoutSenderInput, {nullable:true})
    Message?: MessageCreateNestedManyWithoutSenderInput;

    @Field(() => ChatCreateNestedOneWithoutUsersInput, {nullable:true})
    Chat?: ChatCreateNestedOneWithoutUsersInput;
}
