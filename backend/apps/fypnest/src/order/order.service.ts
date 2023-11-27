import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Order } from '@app/prisma-generated/generated/nestgraphql/order/order.model';
import { Prisma } from '@prisma/client';
import { handlePrismaError } from '@app/common/utils';

@Injectable()
export class OrderService {
  private readonly logger = new Logger(OrderService.name);

  constructor(private readonly prisma: PrismaService) {}

  /**
   * Creates a new order in the database.
   * @param orderCreateArgs - The arguments to create an order.
   * @returns The created order.
   */
  async createOrder(orderCreateArgs: Prisma.OrderCreateArgs): Promise<Order> {
    this.logger.log('Creating a new order');
    try {
      const order = await this.prisma.order.create(orderCreateArgs);
      this.logger.log(`Order created with ID: ${order.id}`);
      return order;
    } catch (error) {
      this.logger.error('Failed to create order', { error, orderCreateArgs });
      handlePrismaError(error, 'Failed to create order');
    }
  }

  /**
   * Retrieves a list of orders with optional pagination.
   * @param params - Pagination parameters.
   * @returns A list of orders.
   */
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
      this.logger.error('Failed to retrieve orders', { error, params });
      handlePrismaError(error, 'Failed to retrieve orders');
    }
  }

  /**
   * Retrieves an order by its ID.
   * @param id - The ID of the order.
   * @returns The found order.
   * @throws NotFoundException if the order is not found.
   */
  async getOrderById(id: string): Promise<Order> {
    this.logger.log(`Fetching order by id: ${id}`);
    try {
      const order = await this.prisma.order.findUnique({ where: { id } });
      if (!order) {
        this.logger.warn(`Order with ID ${id} not found`);
        handlePrismaError({ code: 'P2025' }, `Order with ID ${id} not found`);
      }
      return order;
    } catch (error) {
      this.logger.error(`Failed to retrieve order with ID ${id}`, { error });
      handlePrismaError(error, `Failed to retrieve order with ID ${id}`);
    }
  }

  /**
   * Updates an order by its ID.
   * @param orderUpdateArgs - The arguments to update an order.
   * @returns The updated order.
   * @throws NotFoundException if the order to update is not found.
   */
  async updateOrder(orderUpdateArgs: Prisma.OrderUpdateArgs): Promise<Order> {
    const orderId = orderUpdateArgs.where.id;
    this.logger.log(`Updating order with id: ${orderId}`);
    try {
      return await this.prisma.$transaction(async (prisma) => {
        const existingOrder = await prisma.order.findUnique({
          where: { id: orderId },
        });
        if (!existingOrder) {
          this.logger.warn(`Order with ID ${orderId} not found for update`);
          handlePrismaError(
            { code: 'P2025' },
            `Order with ID ${orderId} not found`,
          );
        }
        return await prisma.order.update(orderUpdateArgs);
      });
    } catch (error) {
      this.logger.error(`Failed to update order with ID ${orderId}`, { error });
      handlePrismaError(error, `Failed to update order with ID ${orderId}`);
    }
  }

  /**
   * Deletes an order by its ID.
   * @param id - The ID of the order to delete.
   * @returns The deleted order.
   * @throws NotFoundException if the order to delete is not found.
   */
  async deleteOrder(id: string): Promise<Order> {
    this.logger.log(`Deleting order with id: ${id}`);
    try {
      return await this.prisma.$transaction(async (prisma) => {
        const existingOrder = await prisma.order.findUnique({ where: { id } });
        if (!existingOrder) {
          this.logger.warn(`Order with ID ${id} not found for deletion`);
          handlePrismaError({ code: 'P2025' }, `Order with ID ${id} not found`);
        }
        return await prisma.order.delete({ where: { id } });
      });
    } catch (error) {
      this.logger.error(`Failed to delete order with ID ${id}`, { error });
      handlePrismaError(error, `Failed to delete order with ID ${id}`);
    }
  }
}
