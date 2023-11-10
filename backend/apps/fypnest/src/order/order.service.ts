import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Order } from '@app/prisma-generated/generated/nestgraphql/order/order.model';
import { Prisma } from '@prisma/client';
import { handlePrismaError } from '@app/common/utils';

@Injectable()
export class OrderService {
  private readonly logger = new Logger(OrderService.name);

  constructor(private readonly prisma: PrismaService) {}

  async createOrder(orderCreateArgs: Prisma.OrderCreateArgs): Promise<Order> {
    this.logger.log('Creating a new order');
    try {
      const order = await this.prisma.order.create(orderCreateArgs);
      this.logger.log(`Order created with ID: ${order.id}`);
      return order;
    } catch (error) {
      handlePrismaError(error, 'Failed to create order');
    }
  }

  async getAllOrders(
    params: { skip?: number; take?: number } = {},
  ): Promise<Order[]> {
    const { skip, take } = params;
    this.logger.log(
      `Fetching orders with pagination - skip: ${skip}, take: ${take}`,
    );
    try {
      return await this.prisma.order.findMany({ skip, take });
    } catch (error) {
      handlePrismaError(error, 'Failed to retrieve orders');
    }
  }

  async getOrderById(id: string): Promise<Order> {
    this.logger.log(`Fetching order by id: ${id}`);
    try {
      const order = await this.prisma.order.findUnique({ where: { id } });
      if (!order) {
        throw new Prisma.PrismaClientKnownRequestError(
          'Record not found', // Message
          {
            code: 'P2025',
            clientVersion: Prisma.prismaVersion.client,
            meta: { target: ['cartItem'] },
          },
        );
      }
      return order;
    } catch (error) {
      handlePrismaError(error, `Failed to retrieve order with ID ${id}`);
    }
  }

  async updateOrder(orderUpdateArgs: Prisma.OrderUpdateArgs): Promise<Order> {
    const orderId = orderUpdateArgs.where.id;
    this.logger.log(`Updating order with id: ${orderId}`);
    try {
      const updatedOrder = await this.prisma.order.update(orderUpdateArgs);
      this.logger.log(`Order with ID ${orderId} updated`);
      return updatedOrder;
    } catch (error) {
      handlePrismaError(error, `Failed to update order with ID ${orderId}`);
    }
  }

  async deleteOrder(id: string): Promise<Order> {
    this.logger.log(`Deleting order with id: ${id}`);
    try {
      const deletedOrder = await this.prisma.order.delete({ where: { id } });
      this.logger.log(`Order with ID ${id} deleted`);
      return deletedOrder;
    } catch (error) {
      handlePrismaError(error, `Failed to delete order with ID ${id}`);
    }
  }
}

// The `handlePrismaError` function and other utilities should be implemented as provided previously.
