import { Module } from '@nestjs/common';
import { StudentResolver } from './student.resolver';
import { StudentService } from './student.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [StudentResolver, StudentService, PrismaService],
})
export class StudentModule {}
