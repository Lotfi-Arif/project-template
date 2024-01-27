import { Controller } from '@nestjs/common';
import { TypedBody, TypedParam, TypedRoute } from '@nestia/core';
import { ProductService } from './product.service';
import {
  Product,
  ProductCreateInput,
  ProductUpdateInput,
} from '@tradetrove/shared-types';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @TypedRoute.Post()
  create(@TypedBody() createProductDto: ProductCreateInput): Promise<Product> {
    return this.productService.create(createProductDto);
  }

  @TypedRoute.Get()
  findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @TypedRoute.Get(':id')
  findOne(@TypedParam('id') id: string): Promise<Product | null> {
    return this.productService.findOne(id);
  }

  @TypedRoute.Patch(':id')
  update(
    @TypedParam('id') id: string,
    @TypedBody() updateProductDto: ProductUpdateInput,
  ): Promise<Product> {
    return this.productService.update(id, updateProductDto);
  }

  @TypedRoute.Delete(':id')
  remove(@TypedParam('id') id: string): Promise<Product> {
    return this.productService.remove(id);
  }
}
