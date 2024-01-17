import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  Order,
  OrderCreateInput,
  OrderUpdateInput,
} from '@tradetrove/shared-types';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  create(createOrderDto: OrderCreateInput): Promise<Order> {
    return this.prisma.order.create({ data: createOrderDto });
  }

  findAll(): Promise<Order[]> {
    return this.prisma.order.findMany();
  }

  findOne(id: string): Promise<Order | null> {
    return this.prisma.order.findUnique({ where: { id } });
  }

  update(id: string, updateOrderDto: OrderUpdateInput): Promise<Order> {
    return this.prisma.order.update({ where: { id }, data: updateOrderDto });
  }

  remove(id: string): Promise<Order> {
    return this.prisma.order.delete({ where: { id } });
  }
}
