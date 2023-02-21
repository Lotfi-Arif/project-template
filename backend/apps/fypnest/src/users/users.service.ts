import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll(userFindManyArgs: Prisma.UserFindManyArgs) {
    return this.prisma.user.findMany(userFindManyArgs);
  }
  async findOne(userFindOneArgs: Prisma.UserFindUniqueArgs) {
    return this.prisma.user.findUnique(userFindOneArgs);
  }

  getStudents(studentWhereMany: Prisma.StudentFindManyArgs) {
    return this.prisma.student.findMany(studentWhereMany);
  }

  getOneStudent(studentWhereUnique: Prisma.StudentFindUniqueArgs) {
    return this.prisma.student.findUnique(studentWhereUnique);
  }

  getCounselors(counselorWhereMany: Prisma.CounselorFindManyArgs) {
    return this.prisma.counselor.findMany(counselorWhereMany);
  }

  getOneCounselor(counselorWhereUnique: Prisma.CounselorFindUniqueArgs) {
    return this.prisma.counselor.findUnique(counselorWhereUnique);
  }

  getMe(userId: string, select?: any) {
    return this.prisma.user.findUnique({ where: { id: userId }, ...select });
  }
  async updateUser(userUpdateArgs: Prisma.UserUpdateArgs) {
    return this.prisma.user.update(userUpdateArgs);
  }
  async deleteUser(userDeleteArgs: Prisma.UserDeleteArgs) {
    return this.prisma.user.delete(userDeleteArgs);
  }
}
