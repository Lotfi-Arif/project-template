import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class EventsService {
  constructor(private prisma: PrismaService) {}

  async findAll(eventFindManyArgs: Prisma.EventFindManyArgs) {
    return this.prisma.event.findMany(eventFindManyArgs);
  }
  async findOne(eventFindOneArgs: Prisma.EventFindUniqueArgs) {
    return this.prisma.event.findUnique(eventFindOneArgs);
  }
  async createEvent(eventCreateOneArgs: Prisma.EventCreateArgs) {
    return this.prisma.event.create(eventCreateOneArgs);
  }
  async updateEvent(eventUpdateArgs: Prisma.EventUpdateArgs) {
    return this.prisma.event.update(eventUpdateArgs);
  }
  async deleteEvent(eventDeleteArgs: Prisma.EventDeleteArgs) {
    return this.prisma.event.delete(eventDeleteArgs);
  }
}
