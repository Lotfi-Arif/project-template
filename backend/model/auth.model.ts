import { User } from '@app/common/generated/index/user/user.model';
import { Field, ObjectType } from '@nestjs/graphql';
import { Token } from './token.model';

@ObjectType()
export class Auth extends Token {
  @Field(() => User)
  user: User;
}
