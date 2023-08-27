import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TeacherService } from './teacher.service'; // Importing TeacherService
import { User } from '@app/prisma-generated/generated/nestgraphql/user/user.model';
import { Logger } from '@nestjs/common';
import { UserUpdateInput } from '@app/prisma-generated/generated/nestgraphql/user/user-update.input';

@Resolver(() => User)
export class TeacherResolver {
  private readonly logger = new Logger(TeacherResolver.name);

  constructor(private readonly teacherService: TeacherService) {} // Injecting TeacherService

  @Query(() => User, { nullable: true })
  async teacher(@Args('id') id: string) {
    this.logger.log(`Fetching teacher with ID: ${id}`);
    const teacher = await this.teacherService.getTeacherById(id);
    if (teacher && teacher.role === 'TEACHER') {
      return teacher;
    }
    return null;
  }

  @Query(() => [User])
  async teachers(@Args('skip') skip?: number, @Args('take') take?: number) {
    this.logger.log(`Fetching teachers with skip: ${skip}, take: ${take}`);
    return await this.teacherService.getTeachers({ skip, take });
  }

  @Mutation(() => User)
  async createTeacher(
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('firstName') firstName: string,
    @Args('lastName') lastName: string,
  ) {
    this.logger.log(`Creating teacher with email: ${email}`);
    return await this.teacherService.createTeacher({
      email,
      password,
      firstName,
      lastName,
      role: 'TEACHER',
    });
  }

  @Mutation(() => User)
  async updateTeacher(
    @Args('id') id: string,
    @Args('data') data: UserUpdateInput,
  ) {
    this.logger.log(`Updating teacher with ID: ${id}`);
    return await this.teacherService.updateTeacher({ id, data });
  }

  @Mutation(() => User)
  async deleteTeacher(@Args('id') id: string) {
    this.logger.log(`Deleting teacher with ID: ${id}`);
    return await this.teacherService.deleteTeacher(id);
  }
}
