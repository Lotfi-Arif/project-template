import { Controller } from '@nestjs/common';
import { TypedBody, TypedParam, TypedRoute } from '@nestia/core';
import { OrderService } from './order.service';
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

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @TypedRoute.Post()
  async create(
    @TypedBody() createOrderDto: OrderCreateInput,
  ): Promise<CreateOrderResult> {
    try {
      const order = await this.orderService.create(createOrderDto);

      if (order.isErr()) {
        return err(order.error);
      }

      const createdOrder = order.value;

      return ok(createdOrder);
    } catch (error) {
      return err(new Error('Error creating order'));
    }
  }

  @TypedRoute.Get()
  async findAll(): Promise<GetAllOrderResult> {
    try {
      const orders = await this.orderService.findAll();

      if (orders.isErr()) {
        return err(orders.error);
      }

      const foundOrders = orders.value;

      return ok(foundOrders);
    } catch (error) {
      return err(new Error('Error finding all orders'));
    }
  }

  @TypedRoute.Get(':id')
  async findOne(@TypedParam('id') id: string): Promise<GetOrderResult> {
    try {
      const order = await this.orderService.findOne(id);

      if (order.isErr()) {
        return err(order.error);
      }

      const foundOrder = order.value;

      return ok(foundOrder);
    } catch (error) {
      return err(new Error('Error finding order'));
    }
  }

  @TypedRoute.Patch(':id')
  async update(
    @TypedParam('id') id: string,
    @TypedBody() updateOrderDto: OrderUpdateInput,
  ): Promise<UpdateOrderResult> {
    try {
      const order = await this.orderService.update(id, updateOrderDto);

      if (order.isErr()) {
        return err(order.error);
      }

      const updatedOrder = order.value;

      return ok(updatedOrder);
    } catch (error) {
      return err(new Error('Error updating order'));
    }
  }

  @TypedRoute.Delete(':id')
  async remove(@TypedParam('id') id: string): Promise<DeleteOrderResult> {
    try {
      const order = await this.orderService.remove(id);

      if (order.isErr()) {
        return err(order.error);
      }

      const deletedOrder = order.value;

      return ok(deletedOrder);
    } catch (error) {
      return err(new Error('Error deleting order'));
    }
  }
}
