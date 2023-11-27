import { Module } from '@nestjs/common';
import { CartItemResolver } from './cart-item.resolver';
import { CartItemService } from './cart-item.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [CartItemResolver, CartItemService, PrismaService],
  exports: [CartItemService],
})
export class CartItemModule {}
