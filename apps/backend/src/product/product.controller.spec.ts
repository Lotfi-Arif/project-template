import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { mockDeep } from 'jest-mock-extended';

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

  describe('findAll', () => {
    it('should return an array of products', async () => {
      const products = [
        {
          id: '1',
          name: 'test',
          price: 100,
          description: 'test',
          image: 'test',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      service.findAll = jest.fn().mockResolvedValue(products);

      const result = await controller.findAll();
      expect(result).toEqual(products);
    });
  });

  describe('findOne', () => {
    it('Should return a product', async () => {
      const products = {
        id: '1',
        name: 'test',
        price: 100,
        description: 'test',
        image: 'test',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      service.findOne = jest.fn().mockResolvedValue(products);

      const result = await controller.findOne('1');
      expect(result).toEqual(products);
    });
  });

  describe('remove', () => {
    it('Should delete a product', async () => {
      const product = {
        id: '1',
        name: 'test',
        price: 100,
        description: 'test',
        image: 'test',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      service.remove = jest.fn().mockResolvedValue(product);

      const result = await controller.remove('1');
      expect(result).toEqual(product);
    });
  });
});
