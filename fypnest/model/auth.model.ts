import { User } from '@app/common/generated/index/user/user.model';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Auth {
  @Field(() => User)
  user: User;
}
