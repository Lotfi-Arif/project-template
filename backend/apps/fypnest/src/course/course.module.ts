import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseResolver } from './course.resolver';
import { PrismaService } from 'nestjs-prisma';

@Module({
  providers: [CourseService, CourseResolver, PrismaService],
})
export class CourseModule {}
