import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { Prisma } from '@prisma/client';
import { Course } from '@app/prisma-generated/generated/nestgraphql/course/course.model';

@Injectable()
export class CourseService {
  private readonly logger = new Logger(CourseService.name);

  constructor(private prisma: PrismaService) {}

  async createCourse(data: Prisma.CourseCreateInput): Promise<Course> {
    this.logger.log('createCourse');
    return this.prisma.course.create({ data });
  }

  async getCourseById(id: string): Promise<Course | null> {
    this.logger.log('getCourseById');
    return this.prisma.course.findUnique({ where: { id } });
  }

  async updateCourse(params: {
    id: string;
    data: Prisma.CourseUpdateInput;
  }): Promise<Course> {
    this.logger.log('updateCourse');
    const { id, data } = params;
    return this.prisma.course.update({ where: { id }, data });
  }

  async deleteCourse(id: string): Promise<Course> {
    this.logger.log('deleteCourse');
    return this.prisma.course.delete({ where: { id } });
  }

  async getCourses(params: {
    skip?: number;
    take?: number;
  }): Promise<Course[]> {
    this.logger.log('getCourses');
    const { skip, take } = params;
    return this.prisma.course.findMany({ skip, take });
  }
}
