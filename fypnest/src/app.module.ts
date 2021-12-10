import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { UsersService } from './users/users.service';

@Module({
  imports: [UsersService],
  controllers: [AppController],
  providers: [PrismaService, AppService],
})
export class AppModule {}
