import { Test, TestingModule } from '@nestjs/testing';
import { OrderService } from './order.service';
import { PrismaService } from 'nestjs-prisma';
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

const mockOrderId = '123';
const mockCreateOrderDto: OrderCreateInput = mockObject(createOrderSchema);
const mockUpdateOrderDto: OrderUpdateInput = mockObject(updateOrderSchema);
const mockOrder: Order = mockObject(orderSchema, { id: mockOrderId });
const mockOrders: Order[] = [mockObject(orderSchema, { id: mockOrderId })];

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
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('create', () => {
    it('should create an order', async () => {
      prismaService.order.create = jest.fn().mockResolvedValue(mockOrder);

      const result = await service.create(mockCreateOrderDto);

      expect(prismaService.order.create).toHaveBeenCalledWith({
        data: mockCreateOrderDto,
      });
      expect(result).toEqual(mockOrder);
    });
  });

  describe('findAll', () => {
    it('should return all mockOrders', async () => {
      prismaService.order.findMany = jest.fn().mockResolvedValue(mockOrders);

      const result = await service.findAll();

      expect(prismaService.order.findMany).toHaveBeenCalled();
      expect(result).toEqual(mockOrders);
    });
  });

  describe('findOne', () => {
    it('should return an order by id', async () => {
      prismaService.order.findUnique = jest.fn().mockResolvedValue(mockOrder);

      const result = await service.findOne(mockOrderId);

      expect(prismaService.order.findUnique).toHaveBeenCalledWith({
        where: { id: mockOrderId },
      });
      expect(result).toEqual(mockOrder);
    });
  });

  describe('update', () => {
    it('should update an order', async () => {
      jest.spyOn(prismaService.order, 'update').mockResolvedValue(mockOrder);

      const result = await service.update(mockOrderId, mockUpdateOrderDto);

      expect(prismaService.order.update).toHaveBeenCalledWith({
        where: { id: mockOrderId },
        data: mockUpdateOrderDto,
      });
      expect(result).toEqual(mockOrder);
    });
  });

  describe('remove', () => {
    it('should remove an order', async () => {
      const deletedOrder: Order = mockObject(orderSchema, { id: mockOrderId });

      jest.spyOn(prismaService.order, 'delete').mockResolvedValue(deletedOrder);

      const result = await service.remove(mockOrderId);

      expect(prismaService.order.delete).toHaveBeenCalledWith({
        where: { id: mockOrderId },
      });
      expect(result).toEqual(deletedOrder);
    });
  });
});
