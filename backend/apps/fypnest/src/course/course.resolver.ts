import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { CourseService } from './course.service';
import { Prisma } from '@prisma/client';
import { Logger } from '@nestjs/common';
import { Course } from 'libs/prisma/src/generated/nestgraphql/course/course.model';

@Resolver(() => Course)
export class CourseResolver {
  private readonly logger = new Logger(CourseResolver.name);

  constructor(private readonly courseService: CourseService) {}

  @Mutation(() => Course)
  async createCourse(
    @Args('data') data: Prisma.CourseCreateInput,
  ): Promise<Course> {
    this.logger.log('createCourse');
    return this.courseService.createCourse(data);
  }

  @Query(() => Course, { nullable: true })
  async getCourseById(@Args('id') id: string): Promise<Course | null> {
    this.logger.log('getCourseById');
    return this.courseService.getCourseById(id);
  }

  @Mutation(() => Course)
  async updateCourse(
    @Args('id') id: string,
    @Args('data') data: Prisma.CourseUpdateInput,
  ): Promise<Course> {
    this.logger.log('updateCourse');
    return this.courseService.updateCourse({ id, data });
  }

  @Mutation(() => Course)
  async deleteCourse(@Args('id') id: string): Promise<Course> {
    this.logger.log('deleteCourse');
    return this.courseService.deleteCourse(id);
  }

  @Query(() => [Course])
  async getCourses(
    @Args('skip', { nullable: true }) skip?: number,
    @Args('take', { nullable: true }) take?: number,
  ): Promise<Course[]> {
    this.logger.log('getCourses');
    return this.courseService.getCourses({ skip, take });
  }
}
