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
    const product = await this.prisma.product.create({
      data: createProductDto,
    });
    return ok(product);
  }

  async findAll(): Promise<GetAllProductResult> {
    const products = await this.prisma.product.findMany();
    return ok(products);
  }

  async findOne(id: string): Promise<GetProductResult> {
    const product = await this.prisma.product.findUnique({ where: { id } });

    if (!product) {
      return err(new Error('Product not found'));
    }

    return ok(product);
  }

  async update(
    id: string,
    updateProductDto: ProductUpdateInput,
  ): Promise<UpdateProductResult> {
    const product = await this.prisma.product.update({
      where: { id },
      data: updateProductDto,
    });
    return ok(product);
  }

  async remove(id: string): Promise<DeleteProductResult> {
    const product = await this.prisma.product.delete({ where: { id } });
    return ok(product);
  }
}
