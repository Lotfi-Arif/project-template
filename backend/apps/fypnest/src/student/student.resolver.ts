import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { User } from '@app/prisma-generated/generated/nestgraphql/user/user.model';
import { Logger } from '@nestjs/common';
import { UserUpdateInput } from '@app/prisma-generated/generated/nestgraphql/user/user-update.input';

@Resolver(() => User)
export class StudentResolver {
  private readonly logger = new Logger(StudentResolver.name);

  constructor(private readonly studentService: StudentService) {} // Injecting StudentService

  @Query(() => User, { nullable: true })
  async student(@Args('id') id: string) {
    this.logger.log(`Fetching student with ID: ${id}`);
    const student = await this.studentService.getStudentById(id);
    if (student && student.role === 'STUDENT') {
      return student;
    }
    return null;
  }

  @Query(() => [User])
  async students(@Args('skip') skip?: number, @Args('take') take?: number) {
    this.logger.log(`Fetching students with skip: ${skip}, take: ${take}`);
    return await this.studentService.getStudents({ skip, take });
  }

  @Mutation(() => User)
  async createStudent(
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('firstName') firstName: string,
    @Args('lastName') lastName: string,
  ) {
    this.logger.log(`Creating student with email: ${email}`);
    return await this.studentService.createStudent({
      email,
      password,
      firstName,
      lastName,
      role: 'STUDENT',
    });
  }

  @Mutation(() => User)
  async updateStudent(
    @Args('id') id: string,
    @Args('data') data: UserUpdateInput,
  ) {
    this.logger.log(`Updating student with ID: ${id}`);
    return await this.studentService.updateStudent({ id, data });
  }

  @Mutation(() => User)
  async deleteStudent(@Args('id') id: string) {
    this.logger.log(`Deleting student with ID: ${id}`);
    return await this.studentService.deleteStudent(id);
  }
}
