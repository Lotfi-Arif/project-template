import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { mockObject } from '@tradetrove/shared-utils';
import {
  Product,
  ProductCreateInput,
  ProductUpdateInput,
  productSchema,
  createProductSchema,
  updateProductSchema,
} from '@tradetrove/shared-types';
import { mockDeep } from 'jest-mock-extended';

const mockProduct: Product = mockObject(productSchema, {
  id: '1',
  name: 'Mock Product',
  description: 'Mock Product Description',
  price: 19.99,
  categoryId: '1',
  createdAt: new Date(),
  updatedAt: new Date(),
});

const mockProductCreateInput: ProductCreateInput = mockObject(
  createProductSchema,
  {
    name: 'Mock Product',
    description: 'Mock Product Description',
    price: 19.99,
    categoryId: '1',
  },
);

const mockProductUpdateInput: ProductUpdateInput = mockObject(
  updateProductSchema,
  {
    name: 'Updated Mock Product',
    description: 'Updated Mock Product Description',
    price: 29.99,
    categoryId: '2',
  },
);

describe('ProductController', () => {
  let controller: ProductController;
  let service: ProductService;

  beforeEach(async () => {
    service = mockDeep<ProductService>();
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [{ provide: ProductService, useValue: service }],
    }).compile();

    controller = module.get<ProductController>(ProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should return a product', async () => {
      service.create = jest.fn().mockResolvedValue(mockProduct);

      const result = await controller.create(mockProductCreateInput);

      expect(result).toEqual(mockProduct);
      expect(service.create).toHaveBeenCalledWith(mockProductCreateInput);
    });
  });

  describe('findAll', () => {
    it('should return an array of products', async () => {
      const mockProducts: Product[] = [mockProduct];
      service.findAll = jest.fn().mockResolvedValue(mockProducts);

      const result = await controller.findAll();

      expect(result).toEqual(mockProducts);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a product by ID', async () => {
      service.findOne = jest.fn().mockResolvedValue(mockProduct);

      const result = await controller.findOne('1');

      expect(result).toEqual(mockProduct);
      expect(service.findOne).toHaveBeenCalledWith('1');
    });

    it('should return null if product is not found', async () => {
      service.findOne = jest.fn().mockResolvedValue(null);

      const result = await controller.findOne('nonexistent');

      expect(result).toBeNull();
      expect(service.findOne).toHaveBeenCalledWith('nonexistent');
    });
  });

  describe('update', () => {
    it('should update and return the updated product', async () => {
      service.update = jest.fn().mockResolvedValue(mockProduct);

      const result = await controller.update('1', mockProductUpdateInput);

      expect(result).toEqual(mockProduct);
      expect(service.update).toHaveBeenCalledWith('1', mockProductUpdateInput);
    });
  });

  describe('remove', () => {
    it('should delete and return the deleted product', async () => {
      service.remove = jest.fn().mockResolvedValue(mockProduct);

      const result = await controller.remove('1');

      expect(result).toEqual(mockProduct);
      expect(service.remove).toHaveBeenCalledWith('1');
    });

    it('should return null if product is not found', async () => {
      service.remove = jest.fn().mockResolvedValue(null as unknown as Product);

      const result = await controller.remove('nonexistent');

      expect(result).toBeNull();
      expect(service.remove).toHaveBeenCalledWith('nonexistent');
    });
  });
});
