import { Controller } from '@nestjs/common';
import { TypedBody, TypedParam, TypedRoute } from '@nestia/core';
import { ProductService } from './product.service';
import {
  Product,
  ProductCreateInput,
  ProductUpdateInput,
} from '@tradetrove/shared-types';
import { Result } from 'neverthrow';

// create and use a utility function to handle errors to make them more readable for the developer and the user
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @TypedRoute.Post()
  async create(
    @TypedBody() createProductDto: ProductCreateInput,
  ): Promise<Result<Product, Error>> {
    return this.productService.create(createProductDto);
  }

  @TypedRoute.Get()
  async findAll(): Promise<Result<Product[], Error>> {
    return this.productService.findAll();
  }

  @TypedRoute.Get(':id')
  async findOne(
    @TypedParam('id') id: string,
  ): Promise<Result<Product | null, Error>> {
    return this.productService.findOne(id);
  }

  @TypedRoute.Put(':id')
  async update(
    @TypedParam('id') id: string,
    @TypedBody() updateProductDto: ProductUpdateInput,
  ): Promise<Result<Product, Error>> {
    return this.productService.update(id, updateProductDto);
  }

  @TypedRoute.Delete(':id')
  async remove(@TypedParam('id') id: string): Promise<Result<Product, Error>> {
    return this.productService.remove(id);
  }
}
