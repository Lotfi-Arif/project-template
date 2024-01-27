import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  Product,
  ProductCreateInput,
  ProductUpdateInput,
} from '@tradetrove/shared-types';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async create(
    createProductDto: ProductCreateInput,
  ): Promise<Result<Product, Error>> {
    try {
      const product = await this.prisma.product.create({
        data: createProductDto,
      });
      return ok(product);
    } catch (error) {
      return err(new Error('Error creating product'));
    }
  }

  async findAll(): Promise<Result<Product[], Error>> {
    try {
      const products = await this.prisma.product.findMany();
      return ok(products);
    } catch (error) {
      return err(new Error('Error finding all products'));
    }
  }

  async findOne(id: string): Promise<Result<Product | null, Error>> {
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
  ): Promise<Result<Product, Error>> {
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

  async remove(id: string): Promise<Result<Product, Error>> {
    try {
      const product = await this.prisma.product.delete({ where: { id } });
      return ok(product);
    } catch (error) {
      return err(new Error('Error removing product'));
    }
  }
}
