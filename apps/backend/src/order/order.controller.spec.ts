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
      expect(result).toEqual(mockOrder);
    });

    it('should throw InternalServerErrorException if mockOrder creation fails', async () => {
      orderServiceMock.create = jest
        .fn()
        .mockRejectedValue(new InternalServerErrorException('Test error'));

      await expect(controller.create(mockOrderCreateInput)).rejects.toThrow(
        InternalServerErrorException,
      );
    });
  });

  describe('findAllOrders', () => {
    it('should return all mockOrders', async () => {
      orderServiceMock.findAll = jest.fn().mockResolvedValue(mockOrders);

      const result = await controller.findAll();
      expect(result).toEqual(mockOrders);
    });

    it('should throw InternalServerErrorException if mockOrder retrieval fails', async () => {
      orderServiceMock.findAll = jest
        .fn()
        .mockRejectedValue(new InternalServerErrorException('Test error'));

      await expect(controller.findAll()).rejects.toThrow(
        InternalServerErrorException,
      );
    });
  });

  describe('findOneOrder', () => {
    it('should return one mockOrder', async () => {
      orderServiceMock.findOne = jest.fn().mockResolvedValue(mockOrder);

      const result = await controller.findOne(mockOrder.id);
      expect(result).toEqual(mockOrder);
    });

    it('should throw InternalServerErrorException if mockOrder retrieval fails', async () => {
      orderServiceMock.findOne = jest
        .fn()
        .mockRejectedValue(new InternalServerErrorException('Test error'));

      await expect(controller.findOne(mockOrder.id)).rejects.toThrow(
        InternalServerErrorException,
      );
    });
  });

  describe('updateOrder', () => {
    it('should return updated mockOrder', async () => {
      orderServiceMock.update = jest.fn().mockResolvedValue(mockOrder);

      const result = await controller.update(
        mockOrder.id,
        mockOrderUpdateInput,
      );
      expect(result).toEqual(mockOrder);
    });

    it('should throw InternalServerErrorException if mockOrder update fails', async () => {
      orderServiceMock.update = jest
        .fn()
        .mockRejectedValue(new InternalServerErrorException('Test error'));

      await expect(
        controller.update(mockOrder.id, mockOrderUpdateInput),
      ).rejects.toThrow(InternalServerErrorException);
    });
  });

  describe('removeOrder', () => {
    it('should return removed mockOrder', async () => {
      orderServiceMock.remove = jest.fn().mockResolvedValue(mockOrder);

      const result = await controller.remove(mockOrder.id);
      expect(result).toEqual(mockOrder);
    });

    it('should throw InternalServerErrorException if mockOrder removal fails', async () => {
      orderServiceMock.remove = jest
        .fn()
        .mockRejectedValue(new InternalServerErrorException('Test error'));

      await expect(controller.remove(mockOrder.id)).rejects.toThrow(
        InternalServerErrorException,
      );
    });
  });
});
