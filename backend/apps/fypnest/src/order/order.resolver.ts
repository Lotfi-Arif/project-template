import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { Order } from '@app/prisma-generated/generated/nestgraphql/order/order.model';
import { Logger, NotFoundException } from '@nestjs/common';
import { OrderUpdateInput } from '@app/prisma-generated/generated/nestgraphql/order/order-update.input';
import { OrderCreateInput } from '@app/prisma-generated/generated/nestgraphql/order/order-create.input';

@Resolver(() => Order)
export class OrderResolver {
  private readonly logger = new Logger(OrderResolver.name);

  constructor(private readonly orderService: OrderService) {}

  @Query(() => [Order])
  async orders(@Args('skip') skip?: number, @Args('take') take?: number) {
    this.logger.log(`Fetching orders with skip: ${skip}, take: ${take}`);
    return this.orderService.getAllOrders({ skip, take });
  }

  @Query(() => Order, { nullable: true })
  async order(@Args('id') id: string) {
    this.logger.log(`Fetching order with ID: ${id}`);
    const order = await this.orderService.getOrderById(id);
    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    return order;
  }

  @Mutation(() => Order)
  async createOrder(@Args('data') data: OrderCreateInput) {
    this.logger.log('Creating a new order');
    return this.orderService.createOrder(data);
  }

  @Mutation(() => Order)
  async updateOrder(
    @Args('id') id: string,
    @Args('data') data: OrderUpdateInput,
  ) {
    this.logger.log(`Updating order with ID: ${id}`);
    return this.orderService.updateOrder({ id, data });
  }

  @Mutation(() => Order)
  async deleteOrder(@Args('id') id: string) {
    this.logger.log(`Deleting order with ID: ${id}`);
    return this.orderService.deleteOrder(id);
  }
}
