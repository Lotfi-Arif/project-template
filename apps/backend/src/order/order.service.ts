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
    try {
      const order = await this.prisma.order.create({ data: createOrderDto });

      return ok(order);
    } catch (error) {
      return err(new Error('Error creating order'));
    }
  }

  async findAll(): Promise<GetAllOrderResult> {
    try {
      const orders = await this.prisma.order.findMany();

      return ok(orders);
    } catch (error) {
      return err(new Error('Error finding all orders'));
    }
  }

  async findOne(id: string): Promise<GetOrderResult> {
    try {
      const order = await this.prisma.order.findUnique({ where: { id } });

      if (!order) {
        return err(new Error('Order not found'));
      }

      return ok(order);
    } catch (error) {
      return err(new Error('Error finding order'));
    }
  }

  async update(
    id: string,
    updateOrderDto: OrderUpdateInput,
  ): Promise<UpdateOrderResult> {
    try {
      const order = await this.prisma.order.update({
        where: { id },
        data: updateOrderDto,
      });

      return ok(order);
    } catch (error) {
      return err(new Error('Error updating order'));
    }
  }

  async remove(id: string): Promise<DeleteOrderResult> {
    try {
      const order = await this.prisma.order.delete({ where: { id } });

      return ok(order);
    } catch (error) {
      return err(new Error('Error deleting order'));
    }
  }
}
