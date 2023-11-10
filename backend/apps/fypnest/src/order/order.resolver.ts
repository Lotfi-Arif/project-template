import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { Order } from '@app/prisma-generated/generated/nestgraphql/order/order.model';
import { Logger } from '@nestjs/common';
import { UpdateOneOrderArgs } from '@app/prisma-generated/generated/nestgraphql/order/update-one-order.args';
import { CreateOneOrderArgs } from '@app/prisma-generated/generated/nestgraphql/order/create-one-order.args';
import { handleHttpError } from '@app/common/utils';

@Resolver(() => Order)
export class OrderResolver {
  private readonly logger = new Logger(OrderResolver.name);

  constructor(private readonly orderService: OrderService) {}

  /**
   * Retrieves a list of orders with optional pagination.
   * @param skip - How many records to skip (for pagination).
   * @param take - The limit of records to return (for pagination).
   * @returns An array of order entities.
   */
  @Query(() => [Order])
  async orders(@Args('skip') skip?: number, @Args('take') take?: number) {
    // Log the request and call the service method
    try {
      this.logger.log(`Fetching orders with skip: ${skip}, take: ${take}`);
      return this.orderService.getAllOrders({ skip, take });
    } catch (error) {
      this.logger.error('Failed to retrieve orders', { error });
      throw handleHttpError(error, 'Failed to retrieve orders');
    }
  }

  /**
   * Retrieves a single order by its ID.
   * @param id - The unique identifier of the order.
   * @returns The order entity if found, or null if not found.
   */
  @Query(() => Order, { nullable: true })
  async order(@Args('id') id: string) {
    try {
      this.logger.log(`Fetching order with ID: ${id}`);
      return await this.orderService.getOrderById(id);
    } catch (error) {
      this.logger.error(`Failed to retrieve order with ID: ${id}`, { error });
      throw handleHttpError(error);
    }
  }

  /**
   * Creates a new order with the given data.
   * @param data - The data to create a new order.
   * @returns The newly created order entity.
   */
  @Mutation(() => Order)
  async createOrder(@Args('data') data: CreateOneOrderArgs) {
    try {
      this.logger.log('Creating a new order');
      return await this.orderService.createOrder(data);
    } catch (error) {
      this.logger.error('Failed to create a new order', { error });
      throw handleHttpError(error);
    }
  }

  /**
   * Updates an existing order by ID with the given data.
   * @param updateOneOrderArgs - The arguments to update an order, including where and data.
   * @returns The updated order entity.
   */
  @Mutation(() => Order)
  async updateOrder(@Args('data') updateOneOrderArgs: UpdateOneOrderArgs) {
    try {
      this.logger.log(`Updating order with ID: ${updateOneOrderArgs.where.id}`);
      return await this.orderService.updateOrder(updateOneOrderArgs);
    } catch (error) {
      this.logger.error(
        `Failed to update order with ID: ${updateOneOrderArgs}`,
        { error },
      );
      throw handleHttpError(error);
    }
  }

  /**
   * Deletes an existing order by ID.
   * @param id - The unique identifier of the order to delete.
   * @returns The deleted order entity.
   */
  @Mutation(() => Order)
  async deleteOrder(@Args('id') id: string) {
    try {
      this.logger.log(`Deleting order with ID: ${id}`);
      return await this.orderService.deleteOrder(id);
    } catch (error) {
      this.logger.error(`Failed to delete order with ID: ${id}`, { error });
      throw handleHttpError(error);
    }
  }
}
