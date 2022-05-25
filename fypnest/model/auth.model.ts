import { User } from '@app/common/generated/index/user/user.model';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Auth {
  user: User;
}
