import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Gender } from '../prisma/gender.enum';
import { AccountStatus } from '../prisma/account-status.enum';
import { Role } from '../prisma/role.enum';
import { AdminUncheckedCreateNestedOneWithoutUserInput } from '../admin/admin-unchecked-create-nested-one-without-user.input';
import { CounselorUncheckedCreateNestedOneWithoutUserInput } from '../counselor/counselor-unchecked-create-nested-one-without-user.input';
import { CounselorSessionUncheckedCreateNestedOneWithoutUserInput } from '../counselor-session/counselor-session-unchecked-create-nested-one-without-user.input';
import { PostUncheckedCreateNestedManyWithoutAuthorInput } from '../post/post-unchecked-create-nested-many-without-author.input';
import { StaffUncheckedCreateNestedOneWithoutUserInput } from '../staff/staff-unchecked-create-nested-one-without-user.input';
import { StudentUncheckedCreateNestedOneWithoutUserInput } from '../student/student-unchecked-create-nested-one-without-user.input';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => String, {nullable:true})
    mobile?: string;

    @Field(() => Gender, {nullable:true})
    gender?: keyof typeof Gender;

    @Field(() => AccountStatus, {nullable:true})
    accountStatus?: keyof typeof AccountStatus;

    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => AdminUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => CounselorUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    counselor?: CounselorUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => CounselorSessionUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    counselingSession?: CounselorSessionUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => PostUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput;

    @Field(() => StaffUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    staff?: StaffUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => StudentUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    student?: StudentUncheckedCreateNestedOneWithoutUserInput;
}
