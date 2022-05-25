import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { PasswordService } from '../users/password.service';

@Module({
  providers: [AuthService, AuthResolver, PasswordService],
})
export class AuthModule {}
