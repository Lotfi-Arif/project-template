// user.module.ts
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [UserService, UserResolver, PrismaService],
  exports: [UserService],
})
export class UserModule {}
