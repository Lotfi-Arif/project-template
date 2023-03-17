import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CourseEnrollment } from '@app/prisma-generated/generated/nestgraphql/course-enrollment/course-enrollment.model';

@Injectable()
export class CourseEnrollmentService {
  private readonly logger = new Logger(CourseEnrollmentService.name);

  constructor(private prisma: PrismaService) {}

  async createCourseEnrollment(
    data: Prisma.CourseEnrollmentCreateInput,
  ): Promise<CourseEnrollment> {
    this.logger.log(`Creating course enrollment: ${JSON.stringify(data)}`);
    return this.prisma.courseEnrollment.create({ data });
  }

  async getCourseEnrollmentById(id: string): Promise<CourseEnrollment | null> {
    this.logger.log(`Getting course enrollment by id: ${id}`);
    return this.prisma.courseEnrollment.findUnique({ where: { id } });
  }

  async deleteCourseEnrollment(id: string): Promise<CourseEnrollment> {
    this.logger.log(`Deleting course enrollment by id: ${id}`);
    return this.prisma.courseEnrollment.delete({ where: { id } });
  }

  async getCourseEnrollments(params: {
    skip?: number;
    take?: number;
  }): Promise<CourseEnrollment[]> {
    const { skip, take } = params;
    this.logger.log(
      `Getting course enrollments with skip: ${skip}, take: ${take}`,
    );
    return this.prisma.courseEnrollment.findMany({ skip, take });
  }

  async updateCourseEnrollment(params: {
    id: string;
    data: Prisma.CourseEnrollmentUpdateInput;
  }): Promise<CourseEnrollment> {
    const { id, data } = params;
    this.logger.log(`Updating course enrollment with id: ${id}`);
    return this.prisma.courseEnrollment.update({ where: { id }, data });
  }
}
