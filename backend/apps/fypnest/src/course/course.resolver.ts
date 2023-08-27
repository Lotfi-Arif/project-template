import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { CourseService } from './course.service';
import { Logger } from '@nestjs/common';
import { Course } from '@app/prisma-generated/generated/nestgraphql/course/course.model';
import { CourseCreateInput } from '@app/prisma-generated/generated/nestgraphql/course/course-create.input';
import { CourseUpdateInput } from '@app/prisma-generated/generated/nestgraphql/course/course-update.input';

@Resolver(() => Course)
export class CourseResolver {
  private readonly logger = new Logger(CourseResolver.name);

  constructor(private readonly courseService: CourseService) {}

  @Mutation(() => Course)
  async createCourse(@Args('data') data: CourseCreateInput): Promise<Course> {
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
    @Args('data') data: CourseUpdateInput,
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
