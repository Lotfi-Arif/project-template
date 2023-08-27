import { Module } from '@nestjs/common';
import { CourseEnrollmentResolver } from './course-enrollment.resolver';
import { CourseEnrollmentService } from './course-enrollment.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [CourseEnrollmentResolver, CourseEnrollmentService],
  exports: [CourseEnrollmentService],
})
export class CourseEnrollmentModule {}
