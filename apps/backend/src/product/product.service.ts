import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  Product,
  ProductCreateInput,
  ProductUpdateInput,
} from '@tradetrove/shared-types';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  create(createProductDto: ProductCreateInput): Promise<Product> {
    return this.prisma.product.create({ data: createProductDto });
  }

  findAll(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }

  findOne(id: string): Promise<Product | null> {
    return this.prisma.product.findUnique({ where: { id } });
  }

  update(id: string, updateProductDto: ProductUpdateInput): Promise<Product> {
    return this.prisma.product.update({
      where: { id },
      data: updateProductDto,
    });
  }

  remove(id: string): Promise<Product> {
    return this.prisma.product.delete({ where: { id } });
  }
}
