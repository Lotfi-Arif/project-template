import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CourseEnrollmentService } from './course-enrollment.service';
import { CourseEnrollment } from '@app/prisma-generated/generated/nestgraphql/course-enrollment/course-enrollment.model';
import { Logger } from '@nestjs/common';
import { CourseEnrollmentCreateInput } from '@app/prisma-generated/generated/nestgraphql/course-enrollment/course-enrollment-create.input';
import { CourseEnrollmentUpdateInput } from '@app/prisma-generated/generated/nestgraphql/course-enrollment/course-enrollment-update.input';

@Resolver(() => CourseEnrollment)
export class CourseEnrollmentResolver {
  private readonly logger = new Logger(CourseEnrollmentResolver.name);

  constructor(
    private readonly courseEnrollmentService: CourseEnrollmentService,
  ) {}

  @Query(() => [CourseEnrollment])
  async courseEnrollments(
    @Args('skip', { nullable: true }) skip?: number,
    @Args('take', { nullable: true }) take?: number,
  ): Promise<CourseEnrollment[]> {
    this.logger.log(
      `Querying course enrollments with skip: ${skip}, take: ${take}`,
    );
    return this.courseEnrollmentService.getCourseEnrollments({ skip, take });
  }

  @Query(() => CourseEnrollment, { nullable: true })
  async courseEnrollment(
    @Args('id') id: string,
  ): Promise<CourseEnrollment | null> {
    this.logger.log(`Querying course enrollment with id: ${id}`);
    return this.courseEnrollmentService.getCourseEnrollmentById(id);
  }

  @Mutation(() => CourseEnrollment)
  async createCourseEnrollment(
    @Args('data') data: CourseEnrollmentCreateInput,
  ): Promise<CourseEnrollment> {
    this.logger.log(`Creating course enrollment: ${JSON.stringify(data)}`);
    return this.courseEnrollmentService.createCourseEnrollment(data);
  }

  @Mutation(() => CourseEnrollment)
  async updateCourseEnrollment(
    @Args('id') id: string,
    @Args('data') data: CourseEnrollmentUpdateInput,
  ): Promise<CourseEnrollment> {
    this.logger.log(`Updating course enrollment with id: ${id}`);
    return this.courseEnrollmentService.updateCourseEnrollment({ id, data });
  }

  @Mutation(() => CourseEnrollment)
  async deleteCourseEnrollment(
    @Args('id') id: string,
  ): Promise<CourseEnrollment> {
    this.logger.log(`Deleting course enrollment with id: ${id}`);
    return this.courseEnrollmentService.deleteCourseEnrollment(id);
  }
}
