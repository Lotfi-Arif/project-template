import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';
import { Role } from '@app/common/generated/index/prisma/role.enum';
import { AccountStatus } from '@app/common/generated/index/prisma/account-status.enum';

@InputType()
export class SignupInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @Field({ nullable: true })
  firstName: string;

  @Field({ nullable: true })
  lastName: string;

  @Field({ nullable: true })
  iCard: string;

  @Field(() => Role, {})
  role: Role;

  @Field({ nullable: true })
  mobile: string;

  @Field(() => AccountStatus, {})
  accountStatus: AccountStatus;
}
