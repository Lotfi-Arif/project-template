import { Controller } from '@nestjs/common';
import { TypedBody, TypedParam, TypedRoute } from '@nestia/core';
import { ProductService } from './product.service';
import {
  CreateProductResult,
  DeleteProductResult,
  GetAllProductResult,
  GetProductResult,
  ProductCreateInput,
  ProductUpdateInput,
  UpdateProductResult,
} from '@tradetrove/shared-types';
import { err, ok } from 'neverthrow';

// create and use a utility function to handle errors to make them more readable for the developer and the user
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @TypedRoute.Post()
  async create(
    @TypedBody() createProductDto: ProductCreateInput,
  ): Promise<CreateProductResult> {
    try {
      const product = await this.productService.create(createProductDto);

      if (product.isErr()) {
        return err(product.error);
      }

      const createdProduct = product.value;

      return ok(createdProduct);
    } catch (error) {
      return err(new Error('Error creating product'));
    }
  }

  @TypedRoute.Get()
  async findAll(): Promise<GetAllProductResult> {
    try {
      const products = await this.productService.findAll();

      if (products.isErr()) {
        return err(products.error);
      }

      const foundProducts = products.value;

      return ok(foundProducts);
    } catch (error) {
      return err(new Error('Error finding all products'));
    }
  }

  @TypedRoute.Get(':id')
  async findOne(@TypedParam('id') id: string): Promise<GetProductResult> {
    try {
      const product = await this.productService.findOne(id);

      if (product.isErr()) {
        return err(product.error);
      }

      const foundProduct = product.value;

      return ok(foundProduct);
    } catch (error) {
      return err(new Error('Error finding product'));
    }
  }

  @TypedRoute.Put(':id')
  async update(
    @TypedParam('id') id: string,
    @TypedBody() updateProductDto: ProductUpdateInput,
  ): Promise<UpdateProductResult> {
    try {
      const product = await this.productService.update(id, updateProductDto);

      if (product.isErr()) {
        return err(product.error);
      }

      const updatedProduct = product.value;

      return ok(updatedProduct);
    } catch (error) {
      return err(new Error('Error updating product'));
    }
  }

  @TypedRoute.Delete(':id')
  async remove(@TypedParam('id') id: string): Promise<DeleteProductResult> {
    try {
      const product = await this.productService.remove(id);

      if (product.isErr()) {
        return err(product.error);
      }

      const deletedProduct = product.value;

      return ok(deletedProduct);
    } catch (error) {
      return err(new Error('Error removing product'));
    }
  }
}
