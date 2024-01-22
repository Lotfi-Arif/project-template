import { Test, TestingModule } from '@nestjs/testing';
import { OrderService } from './order.service';
import { PrismaService } from '../prisma/prisma.service';
import {
  Order,
  OrderCreateInput,
  OrderUpdateInput,
  createOrderSchema,
  orderSchema,
  updateOrderSchema,
} from '@tradetrove/shared-types';
import { mockDeep } from 'jest-mock-extended';
import { mockObject } from '@tradetrove/shared-utils';

const orderId = '123';
const createOrderDto: OrderCreateInput = mockObject(createOrderSchema);
const updateOrderDto: OrderUpdateInput = mockObject(updateOrderSchema);
const order: Order = mockObject(orderSchema, { id: orderId });
const orders: Order[] = [mockObject(orderSchema, { id: orderId })];

describe('OrderService', () => {
  let service: OrderService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    prismaService = mockDeep<PrismaService>();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrderService,
        { provide: PrismaService, useValue: prismaService },
      ],
    }).compile();

    service = module.get<OrderService>(OrderService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('create', () => {
    it('should create an order', async () => {
      prismaService.order.create = jest.fn().mockResolvedValue(order);

      const result = await service.create(createOrderDto);

      expect(prismaService.order.create).toHaveBeenCalledWith({
        data: createOrderDto,
      });
      expect(result).toEqual(order);
    });
  });

  describe('findAll', () => {
    it('should return all orders', async () => {
      prismaService.order.findMany = jest.fn().mockResolvedValue(orders);

      const result = await service.findAll();

      expect(prismaService.order.findMany).toHaveBeenCalled();
      expect(result).toEqual(orders);
    });
  });

  describe('findOne', () => {
    it('should return an order by id', async () => {
      prismaService.order.findUnique = jest.fn().mockResolvedValue(order);

      const result = await service.findOne(orderId);

      expect(prismaService.order.findUnique).toHaveBeenCalledWith({
        where: { id: orderId },
      });
      expect(result).toEqual(order);
    });
  });

  describe('update', () => {
    it('should update an order', async () => {
      jest.spyOn(prismaService.order, 'update').mockResolvedValue(order);

      const result = await service.update(orderId, updateOrderDto);

      expect(prismaService.order.update).toHaveBeenCalledWith({
        where: { id: orderId },
        data: updateOrderDto,
      });
      expect(result).toEqual(order);
    });
  });

  describe('remove', () => {
    it('should remove an order', async () => {
      const orderId = '123';
      const deletedOrder: Order = mockObject(orderSchema, { id: orderId });

      jest.spyOn(prismaService.order, 'delete').mockResolvedValue(deletedOrder);

      const result = await service.remove(orderId);

      expect(prismaService.order.delete).toHaveBeenCalledWith({
        where: { id: orderId },
      });
      expect(result).toEqual(deletedOrder);
    });
  });
});
