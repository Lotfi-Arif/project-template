import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PasswordService } from './password.service';

@Module({
  providers: [UsersResolver, UsersService, PasswordService],
  exports: [UsersResolver, UsersService, PasswordService],
})
export class UsersModule {}
