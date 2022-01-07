import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersResolver } from './users.resolver';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService, UsersResolver],
})
export class UsersModule {}
