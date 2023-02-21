import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';


@Injectable()
export class FAQsService {
  constructor(private prisma: PrismaService) { }

  async findAll(fAQFindManyArgs: Prisma.FAQFindManyArgs) {
    return this.prisma.fAQ.findMany(fAQFindManyArgs);
  }
  async findOne(fAQFindOneArgs: Prisma.FAQFindUniqueArgs) {
    return this.prisma.fAQ.findUnique(fAQFindOneArgs);
  }
  async createFAQ(fAQCreateOneArgs: Prisma.FAQCreateArgs) {
    return this.prisma.fAQ.create(fAQCreateOneArgs);
  }
  async updateFAQ(fAQUpdateArgs: Prisma.FAQUpdateArgs) {
    return this.prisma.fAQ.update(fAQUpdateArgs);
  }
  async deleteFAQ(fAQDeleteArgs: Prisma.FAQDeleteArgs) {
    return this.prisma.fAQ.delete(fAQDeleteArgs);
  }
}
