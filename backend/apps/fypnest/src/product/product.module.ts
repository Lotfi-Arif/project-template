import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';

@Module({
  providers: [ProductService, ProductResolver, PrismaService],
})
export class ProductModule {}
