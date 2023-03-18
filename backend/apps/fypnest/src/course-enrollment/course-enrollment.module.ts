import { Module } from '@nestjs/common';
import { CourseEnrollmentResolver } from './course-enrollment.resolver';
import { CourseEnrollmentService } from './course-enrollment.service';

@Module({
  providers: [CourseEnrollmentResolver, CourseEnrollmentService],
})
export class CourseEnrollmentModule {}
