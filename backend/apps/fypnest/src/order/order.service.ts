import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Order } from '@app/prisma-generated/generated/nestgraphql/order/order.model';
import { OrderCreateInput } from '@app/prisma-generated/generated/nestgraphql/order/order-create.input';
import { OrderUpdateInput } from '@app/prisma-generated/generated/nestgraphql/order/order-update.input';

@Injectable()
export class OrderService {
  private readonly logger = new Logger(OrderService.name);

  constructor(private readonly prisma: PrismaService) {}

  /**
   * Create a new order
   * @param data - Data to create the order with
   * @returns The created order
   */
  async createOrder(data: OrderCreateInput): Promise<Order> {
    this.logger.log('Creating a new order');
    return this.prisma.order.create({ data });
  }

  /**
   * Retrieve all orders
   * @param params - Optional pagination parameters
   * @returns List of orders
   */
  async getAllOrders(
    params: { skip?: number; take?: number } = {},
  ): Promise<Order[]> {
    const { skip, take } = params;
    this.logger.log(
      `Fetching orders with pagination - skip: ${skip}, take: ${take}`,
    );
    return this.prisma.order.findMany({ skip, take });
  }

  /**
   * Retrieve an order by its ID
   * @param id - Order ID
   * @returns The order or null if not found
   */
  async getOrderById(id: string): Promise<Order | null> {
    this.logger.log(`Fetching order by id: ${id}`);
    const order = await this.prisma.order.findUnique({ where: { id } });
    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    return order;
  }

  /**
   * Update an order by its ID
   * @param params - Update parameters
   * @returns The updated order
   */
  async updateOrder(params: {
    id: string;
    data: OrderUpdateInput;
  }): Promise<Order> {
    const { id, data } = params;
    this.logger.log(`Updating order with id: ${id}`);
    return this.prisma.order.update({ where: { id }, data });
  }

  /**
   * Delete an order by its ID
   * @param id - Order ID
   * @returns The deleted order
   */
  async deleteOrder(id: string): Promise<Order> {
    this.logger.log(`Deleting order with id: ${id}`);
    return this.prisma.order.delete({ where: { id } });
  }
}
