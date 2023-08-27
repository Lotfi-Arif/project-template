import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from 'libs/prisma/src/generated/nestgraphql/user/user.model';
import { UserCreateInput } from '@app/prisma-generated/generated/nestgraphql/user/user-create.input';
import { UserUpdateInput } from '@app/prisma-generated/generated/nestgraphql/user/user-update.input';

@Injectable()
export class StudentService {
  private readonly logger = new Logger(StudentService.name);

  constructor(private prisma: PrismaService) {}

  async getStudents(params: { skip?: number; take?: number }): Promise<User[]> {
    const { skip, take } = params;
    this.logger.log(
      `Fetching students with pagination - skip: ${skip}, take: ${take}`,
    );
    return this.prisma.user.findMany({
      where: { role: 'STUDENT' },
      skip,
      take,
    });
  }

  async getStudentById(id: string): Promise<User> {
    this.logger.log(`Fetching student with id: ${id}`);
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async createStudent(data: UserCreateInput): Promise<User> {
    this.logger.log(`Creating student with data: ${JSON.stringify(data)}`);
    return this.prisma.user.create({
      data: {
        ...data,
        role: 'STUDENT',
      },
    });
  }

  async updateStudent(params: {
    id: string;
    data: UserUpdateInput;
  }): Promise<User> {
    const { id, data } = params;
    this.logger.log(`Updating student with id: ${id}`);
    return this.prisma.user.update({
      data,
      where: { id },
    });
  }

  async deleteStudent(id: string): Promise<User> {
    this.logger.log(`Deleting student with id: ${id}`);
    return this.prisma.user.delete({
      where: { id },
    });
  }

  async getStudentByEmail(email: string): Promise<User> {
    this.logger.log(`Fetching student with email: ${email}`);
    return this.prisma.user.findUnique({
      where: { email },
    });
  }
}
