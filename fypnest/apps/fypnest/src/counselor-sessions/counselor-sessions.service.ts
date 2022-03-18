import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma'
import { Prisma } from '@prisma/client';

@Injectable()
export class CounselorSessionsService {
  constructor(private prisma: PrismaService) { }

  async findAll(counselorSessionFindManyArgs: Prisma.CounselorSessionFindManyArgs) {
    return this.prisma.counselorSession.findMany(counselorSessionFindManyArgs);
  }
  async findOne(counselorSessionFindOneArgs: Prisma.CounselorSessionFindUniqueArgs) {
    return this.prisma.counselorSession.findUnique(counselorSessionFindOneArgs);
  }
  async createCounselorSession(counselorSessionCreateOneArgs: Prisma.CounselorSessionCreateArgs) {
    return this.prisma.counselorSession.create(counselorSessionCreateOneArgs);
  }
  async updateCounselorSession(counselorSessionUpdateArgs: Prisma.CounselorSessionUpdateArgs) {
    return this.prisma.counselorSession.update(counselorSessionUpdateArgs);
  }
  async deleteCounselorSession(counselorSessionDeleteArgs: Prisma.CounselorSessionDeleteArgs) {
    return this.prisma.counselorSession.delete(counselorSessionDeleteArgs);
  }
}