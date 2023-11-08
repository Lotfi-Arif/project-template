// cart.module.ts
import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartResolver } from './cart.resolver';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [CartService, CartResolver, PrismaService],
  exports: [CartService],
})
export class CartModule {}
