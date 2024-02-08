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

const mockOrderCreateInput = mockObject(createOrderSchema);
const mockOrderUpdateInput = mockObject(updateOrderSchema);
const mockOrder = mockObject(orderSchema);
const mockOrders = [mockObject(orderSchema)];

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
    it('should return created mockOrder', async () => {
      orderServiceMock.create = jest.fn().mockResolvedValue(mockOrder);

      const result = await controller.create(mockOrderCreateInput);
      if (result.isOk()) expect(result.value).toEqual(mockOrder);
    });

    it('should throw Error if mockOrder creation fails', async () => {
      orderServiceMock.create = jest
        .fn()
        .mockRejectedValue(new Error('Test error'));

      const result = await controller.create(mockOrderCreateInput);

      expect(result.isErr()).toBe(true);
      if (result.isErr()) expect(result.error).toBeInstanceOf(Error);
    });
  });

  describe('findAllOrders', () => {
    it('should return all mockOrders', async () => {
      orderServiceMock.findAll = jest.fn().mockResolvedValue(mockOrders);

      const result = await controller.findAll();

      if (result.isOk()) expect(result.value).toEqual(mockOrders);
    });

    it('should throw Error if mockOrder retrieval fails', async () => {
      orderServiceMock.findAll = jest
        .fn()
        .mockRejectedValue(new Error('Test error'));

      const result = await controller.findAll();

      expect(result.isErr()).toBe(true);
      if (result.isErr()) expect(result.error).toBeInstanceOf(Error);
    });
  });

  describe('findOneOrder', () => {
    it('should return one mockOrder', async () => {
      orderServiceMock.findOne = jest.fn().mockResolvedValue(mockOrder);

      const result = await controller.findOne(mockOrder.id);
      if (result.isOk()) expect(result.value).toEqual(mockOrder);
    });

    it('should throw Error if mockOrder retrieval fails', async () => {
      orderServiceMock.findOne = jest
        .fn()
        .mockRejectedValue(new Error('Test error'));

      const result = await controller.findOne(mockOrder.id);

      expect(result.isErr()).toBe(true);
      if (result.isErr()) expect(result.error).toBeInstanceOf(Error);
    });
  });

  describe('updateOrder', () => {
    it('should return updated mockOrder', async () => {
      orderServiceMock.update = jest.fn().mockResolvedValue(mockOrder);

      const result = await controller.update(
        mockOrder.id,
        mockOrderUpdateInput,
      );

      if (result.isOk()) expect(result.value).toEqual(mockOrder);
    });

    it('should throw Error if mockOrder update fails', async () => {
      orderServiceMock.update = jest
        .fn()
        .mockRejectedValue(new Error('Test error'));

      const result = await controller.update(
        mockOrder.id,
        mockOrderUpdateInput,
      );

      expect(result.isErr()).toBe(true);
      if (result.isErr()) expect(result.error).toBeInstanceOf(Error);
    });
  });

  describe('removeOrder', () => {
    it('should return removed mockOrder', async () => {
      orderServiceMock.remove = jest.fn().mockResolvedValue(mockOrder);

      const result = await controller.remove(mockOrder.id);

      if (result.isOk()) expect(result.value).toEqual(mockOrder);
    });

    it('should throw Error if mockOrder removal fails', async () => {
      orderServiceMock.remove = jest
        .fn()
        .mockRejectedValue(new Error('Test error'));

      const result = await controller.remove(mockOrder.id);

      expect(result.isErr()).toBe(true);
      if (result.isErr()) expect(result.error).toBeInstanceOf(Error);
    });
  });
});
