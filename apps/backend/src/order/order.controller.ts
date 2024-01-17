import { Controller } from '@nestjs/common';
import { TypedBody, TypedParam, TypedRoute } from '@nestia/core';
import { OrderService } from './order.service';
import {
  Order,
  OrderCreateInput,
  OrderUpdateInput,
} from '@tradetrove/shared-types';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @TypedRoute.Post()
  create(@TypedBody() createOrderDto: OrderCreateInput): Promise<Order> {
    return this.orderService.create(createOrderDto);
  }

  @TypedRoute.Get()
  findAll(): Promise<Order[]> {
    return this.orderService.findAll();
  }

  @TypedRoute.Get(':id')
  findOne(@TypedParam('id') id: string): Promise<Order | null> {
    return this.orderService.findOne(id);
  }

  @TypedRoute.Patch(':id')
  update(
    @TypedParam('id') id: string,
    @TypedBody() updateOrderDto: OrderUpdateInput,
  ): Promise<Order> {
    return this.orderService.update(id, updateOrderDto);
  }

  @TypedRoute.Delete(':id')
  remove(@TypedParam('id') id: string): Promise<Order> {
    return this.orderService.remove(id);
  }
}
