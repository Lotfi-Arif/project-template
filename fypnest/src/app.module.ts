import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';

@Module({
  imports: [PrismaModule, UsersModule],
  controllers: [UsersController],
  providers: [PrismaService,UsersService],
  exports: [PrismaService]
})
export class AppModule {}
