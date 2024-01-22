import { Test, TestingModule } from '@nestjs/testing';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { mockObject } from '@tradetrove/shared-utils';
import {
  createOrderSchema,
  orderSchema,
  updateOrderSchema,
} from '@tradetrove/shared-types';
import { mockDeep } from 'jest-mock-extended';
import { InternalServerErrorException } from '@nestjs/common';

const OrderCreateInput = mockObject(createOrderSchema);
const OrderUpdateInput = mockObject(updateOrderSchema);
const order = mockObject(orderSchema);
const orders = [mockObject(orderSchema)];

describe('OrderController', () => {
  let controller: OrderController;
  let orderServiceMock: OrderService;

  beforeEach(async () => {
    orderServiceMock = mockDeep<OrderService>();

    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderController],
      providers: [{ provide: OrderService, useValue: orderServiceMock }],
    }).compile();

    controller = module.get<OrderController>(OrderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('createOrder', () => {
    it('should return created order', async () => {
      orderServiceMock.create = jest.fn().mockResolvedValue(order);

      const result = await controller.create(OrderCreateInput);
      expect(result).toEqual(order);
    });

    it('should throw InternalServerErrorException if order creation fails', async () => {
      orderServiceMock.create = jest
        .fn()
        .mockRejectedValue(new InternalServerErrorException('Test error'));

      await expect(controller.create(OrderCreateInput)).rejects.toThrow(
        InternalServerErrorException,
      );
    });
  });

  describe('findAllOrders', () => {
    it('should return all orders', async () => {
      orderServiceMock.findAll = jest.fn().mockResolvedValue(orders);

      const result = await controller.findAll();
      expect(result).toEqual(orders);
    });

    it('should throw InternalServerErrorException if order retrieval fails', async () => {
      orderServiceMock.findAll = jest
        .fn()
        .mockRejectedValue(new InternalServerErrorException('Test error'));

      await expect(controller.findAll()).rejects.toThrow(
        InternalServerErrorException,
      );
    });
  });

  describe('findOneOrder', () => {
    it('should return one order', async () => {
      orderServiceMock.findOne = jest.fn().mockResolvedValue(order);

      const result = await controller.findOne(order.id);
      expect(result).toEqual(order);
    });

    it('should throw InternalServerErrorException if order retrieval fails', async () => {
      orderServiceMock.findOne = jest
        .fn()
        .mockRejectedValue(new InternalServerErrorException('Test error'));

      await expect(controller.findOne(order.id)).rejects.toThrow(
        InternalServerErrorException,
      );
    });
  });

  describe('updateOrder', () => {
    it('should return updated order', async () => {
      orderServiceMock.update = jest.fn().mockResolvedValue(order);

      const result = await controller.update(order.id, OrderUpdateInput);
      expect(result).toEqual(order);
    });

    it('should throw InternalServerErrorException if order update fails', async () => {
      orderServiceMock.update = jest
        .fn()
        .mockRejectedValue(new InternalServerErrorException('Test error'));

      await expect(
        controller.update(order.id, OrderUpdateInput),
      ).rejects.toThrow(InternalServerErrorException);
    });
  });

  describe('removeOrder', () => {
    it('should return removed order', async () => {
      orderServiceMock.remove = jest.fn().mockResolvedValue(order);

      const result = await controller.remove(order.id);
      expect(result).toEqual(order);
    });

    it('should throw InternalServerErrorException if order removal fails', async () => {
      orderServiceMock.remove = jest
        .fn()
        .mockRejectedValue(new InternalServerErrorException('Test error'));

      await expect(controller.remove(order.id)).rejects.toThrow(
        InternalServerErrorException,
      );
    });
  });
});
