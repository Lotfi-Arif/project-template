import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class CounselorService {
  constructor(private prisma: PrismaService) { }

  async findAll(counselorFindManyArgs: Prisma.CounselorFindManyArgs) {
    return this.prisma.counselor.findMany(counselorFindManyArgs);
  }
  async findOne(counselorFindOneArgs: Prisma.CounselorFindUniqueArgs) {
    return this.prisma.counselor.findUnique(counselorFindOneArgs);
  }
  async createCounselor(counselorCreateOneArgs: Prisma.CounselorCreateArgs) {
    return this.prisma.counselor.create(counselorCreateOneArgs);
  }
  async updateCounselor(counselorUpdateArgs: Prisma.CounselorUpdateArgs) {
    return this.prisma.counselor.update(counselorUpdateArgs);
  }
  async deleteCounselor(counselorDeleteArgs: Prisma.CounselorDeleteArgs) {
    return this.prisma.counselor.delete(counselorDeleteArgs);
  }
}
