import { Controller } from '@nestjs/common';
import { TypedBody, TypedParam, TypedRoute } from '@nestia/core';
import { ProductService } from './product.service';
import {
  Product,
  ProductCreateInput,
  ProductUpdateInput,
} from '@tradetrove/shared-types';
import { ResultAsync } from 'neverthrow';
import { handleAsyncOperation } from '../utils/errors';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @TypedRoute.Post()
  create(
    @TypedBody() createProductDto: ProductCreateInput,
  ): ResultAsync<Product, Error> {
    return handleAsyncOperation(
      this.productService.create(createProductDto),
      'Error creating product',
    );
  }

  @TypedRoute.Get()
  findAll(): ResultAsync<Product[], Error> {
    return handleAsyncOperation(
      this.productService.findAll(),
      'Error finding all products',
    );
  }

  @TypedRoute.Get(':id')
  findOne(@TypedParam('id') id: string): ResultAsync<Product | null, Error> {
    return handleAsyncOperation(
      this.productService.findOne(id),
      'Error finding product',
    );
  }

  @TypedRoute.Patch(':id')
  update(
    @TypedParam('id') id: string,
    @TypedBody() updateProductDto: ProductUpdateInput,
  ): ResultAsync<Product, Error> {
    return handleAsyncOperation(
      this.productService.update(id, updateProductDto),
      'Error updating product',
    );
  }

  @TypedRoute.Delete(':id')
  remove(@TypedParam('id') id: string): ResultAsync<Product, Error> {
    return handleAsyncOperation(
      this.productService.remove(id),
      'Error removing product',
    );
  }
}
