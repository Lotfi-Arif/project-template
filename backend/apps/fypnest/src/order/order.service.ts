import {
  Injectable,
  Logger,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Order } from '@app/prisma-generated/generated/nestgraphql/order/order.model';
import { Prisma } from '@prisma/client';

@Injectable()
export class OrderService {
  private readonly logger = new Logger(OrderService.name);

  constructor(private readonly prisma: PrismaService) {}

  /**
   * Create a new order in the database.
   * @param data - Data to create the order with.
   * @returns The created order object.
   */
  async createOrder(data: Prisma.OrderCreateArgs): Promise<Order> {
    this.logger.log('Creating a new order');
    try {
      const order = await this.prisma.order.create(data);
      this.logger.log(`Order created with ID: ${order.id}`);
      return order;
    } catch (error) {
      this.logger.error('Failed to create order', error.stack);
      throw new InternalServerErrorException('Failed to create order');
    }
  }

  /**
   * Retrieve all orders with optional pagination.
   * @param params - Optional skip and take parameters for pagination.
   * @returns An array of order objects.
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
      this.logger.error('Failed to get orders', error.stack);
      throw new InternalServerErrorException('Failed to retrieve orders');
    }
  }

  /**
   * Retrieve an order by its unique identifier.
   * @param id - Unique identifier of the order to retrieve.
   * @returns The order object if found, otherwise it throws NotFoundException.
   */
  async getOrderById(id: string): Promise<Order> {
    this.logger.log(`Fetching order by id: ${id}`);
    try {
      const order = await this.prisma.order.findUnique({ where: { id } });
      if (!order) {
        throw new NotFoundException(`Order with ID ${id} not found`);
      }
      return order;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      this.logger.error(`Failed to get order with ID ${id}`, error.stack);
      throw new InternalServerErrorException(
        `Failed to retrieve order with ID ${id}`,
      );
    }
  }

  /**
   * Update an existing order by its ID.
   * @param params - Update parameters containing 'where' filter and 'data' to update.
   * @returns The updated order object.
   */
  async updateOrder(data: Prisma.OrderUpdateArgs): Promise<Order> {
    const orderId = data.where.id;
    this.logger.log(`Updating order with id: ${orderId}`);
    try {
      // Check if the order exists
      const existingOrder = await this.prisma.order.findUnique({
        where: { id: orderId },
      });
      if (!existingOrder) {
        throw new NotFoundException(`Order with ID ${orderId} not found`);
      }
      // Perform the update
      const updatedOrder = await this.prisma.order.update(data);
      this.logger.log(`Order with ID ${orderId} updated`);
      return updatedOrder;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      this.logger.error(
        `Failed to update order with ID ${orderId}`,
        error.stack,
      );
      throw new InternalServerErrorException(
        `Failed to update order with ID ${orderId}`,
      );
    }
  }

  /**
   * Delete an order from the database by its ID.
   * @param id - Unique identifier of the order to delete.
   * @returns The deleted order object.
   */
  async deleteOrder(id: string): Promise<Order> {
    this.logger.log(`Deleting order with id: ${id}`);
    try {
      const deletedOrder = await this.prisma.order.delete({ where: { id } });
      this.logger.log(`Order with ID ${id} deleted`);
      return deletedOrder;
    } catch (error) {
      this.logger.error(`Failed to delete order with ID ${id}`, error.stack);
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException(`Order with ID ${id} not found`);
      } else {
        throw new InternalServerErrorException(
          `Failed to delete order with ID ${id}`,
        );
      }
    }
  }
}
