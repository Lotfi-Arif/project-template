import { Module } from '@nestjs/common';
import { TeacherResolver } from './teacher.resolver';
import { TeacherService } from './teacher.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [TeacherResolver, TeacherService, PrismaService],
})
export class TeacherModule {}
