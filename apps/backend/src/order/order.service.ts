import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import {
  CreateOrderResult,
  DeleteOrderResult,
  GetAllOrderResult,
  GetOrderResult,
  OrderCreateInput,
  OrderUpdateInput,
  UpdateOrderResult,
} from '@tradetrove/shared-types';
import { err, ok } from 'neverthrow';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async create(createOrderDto: OrderCreateInput): Promise<CreateOrderResult> {
    const order = await this.prisma.order.create({ data: createOrderDto });

    return ok(order);
  }

  async findAll(): Promise<GetAllOrderResult> {
    const orders = await this.prisma.order.findMany();

    return ok(orders);
  }

  async findOne(id: string): Promise<GetOrderResult> {
    const order = await this.prisma.order.findUnique({ where: { id } });

    if (!order) {
      return err(new Error('Order not found'));
    }

    return ok(order);
  }

  async update(
    id: string,
    updateOrderDto: OrderUpdateInput,
  ): Promise<UpdateOrderResult> {
    const order = await this.prisma.order.update({
      where: { id },
      data: updateOrderDto,
    });

    return ok(order);
  }

  async remove(id: string): Promise<DeleteOrderResult> {
    const order = await this.prisma.order.delete({ where: { id } });

    return ok(order);
  }
}
