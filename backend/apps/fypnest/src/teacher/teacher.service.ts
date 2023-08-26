import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from 'libs/prisma/src/generated/nestgraphql/user/user.model';
import { UserCreateInput } from '@app/prisma-generated/generated/nestgraphql/user/user-create.input';
import { UserUpdateInput } from '@app/prisma-generated/generated/nestgraphql/user/user-update.input';

@Injectable()
export class TeacherService {
  private readonly logger = new Logger(TeacherService.name);

  constructor(private prisma: PrismaService) {}

  async getTeachers(params: { skip?: number; take?: number }): Promise<User[]> {
    const { skip, take } = params;
    this.logger.log(
      `Fetching teachers with pagination - skip: ${skip}, take: ${take}`,
    );
    return this.prisma.user.findMany({
      where: { role: 'TEACHER' },
      skip,
      take,
    });
  }

  async getTeacherById(id: string): Promise<User> {
    this.logger.log(`Fetching teacher with id: ${id}`);
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async createTeacher(data: UserCreateInput): Promise<User> {
    this.logger.log(`Creating teacher with data: ${JSON.stringify(data)}`);
    return this.prisma.user.create({
      data: {
        ...data,
        role: 'TEACHER',
      },
    });
  }

  async updateTeacher(params: {
    id: string;
    data: UserUpdateInput;
  }): Promise<User> {
    const { id, data } = params;
    this.logger.log(`Updating teacher with id: ${id}`);
    return this.prisma.user.update({
      data,
      where: { id },
    });
  }

  async deleteTeacher(id: string): Promise<User> {
    this.logger.log(`Deleting teacher with id: ${id}`);
    return this.prisma.user.delete({
      where: { id },
    });
  }

  async getTeacherByEmail(email: string): Promise<User> {
    this.logger.log(`Fetching teacher with email: ${email}`);
    return this.prisma.user.findUnique({
      where: { email },
    });
  }
}
