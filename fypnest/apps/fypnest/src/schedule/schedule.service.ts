import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ScheduleService {
    constructor(private prisma: PrismaService) {
    }
    async findAll(scheduleFindManyArgs: Prisma.ScheduleFindManyArgs) {
        return this.prisma.schedule.findMany(scheduleFindManyArgs);
      }
      async findOne(scheduleFindOneArgs: Prisma.ScheduleFindUniqueArgs) {
        return this.prisma.schedule.findUnique(scheduleFindOneArgs);
      }
      getMe(scheduleId: string, select?: any) {
        return this.prisma.schedule.findUnique({ where: { id: scheduleId }, ...select });
      }
      async createSchedule(scheduleCreateOneArgs: Prisma.ScheduleCreateArgs) {
        return this.prisma.schedule.create(scheduleCreateOneArgs);
      }
      async updateSchedule(scheduleUpdateArgs: Prisma.ScheduleUpdateArgs) {
        return this.prisma.schedule.update(scheduleUpdateArgs);
      }
      async deleteSchedule(scheduleDeleteArgs: Prisma.ScheduleDeleteArgs) {
        return this.prisma.schedule.delete(scheduleDeleteArgs);
      }
}