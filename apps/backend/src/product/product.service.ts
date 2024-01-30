import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
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

// use neverthrow to handle errors in the service layer
@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async create(
    createProductDto: ProductCreateInput,
  ): Promise<CreateProductResult> {
    try {
      const product = await this.prisma.product.create({
        data: createProductDto,
      });
      return ok(product);
    } catch (error) {
      return err(new Error('Error creating product'));
    }
  }

  async findAll(): Promise<GetAllProductResult> {
    try {
      const products = await this.prisma.product.findMany();
      return ok(products);
    } catch (error) {
      return err(new Error('Error finding all products'));
    }
  }

  async findOne(id: string): Promise<GetProductResult> {
    try {
      const product = await this.prisma.product.findUnique({ where: { id } });
      return ok(product);
    } catch (error) {
      return err(new Error('Error finding product'));
    }
  }

  async update(
    id: string,
    updateProductDto: ProductUpdateInput,
  ): Promise<UpdateProductResult> {
    try {
      const product = await this.prisma.product.update({
        where: { id },
        data: updateProductDto,
      });
      return ok(product);
    } catch (error) {
      return err(new Error('Error updating product'));
    }
  }

  async remove(id: string): Promise<DeleteProductResult> {
    try {
      const product = await this.prisma.product.delete({ where: { id } });
      return ok(product);
    } catch (error) {
      return err(new Error('Error removing product'));
    }
  }
}
