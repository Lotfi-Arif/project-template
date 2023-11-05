// cart.service.ts

import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Cart } from '@app/prisma-generated/generated/nestgraphql/cart/cart.model';
import { CartItem } from '@app/prisma-generated/generated/nestgraphql/cart-item/cart-item.model';

@Injectable()
export class CartService {
  private readonly logger = new Logger(CartService.name);

  constructor(private prisma: PrismaService) {}

  /**
   * Adds an item to the user's cart.
   * @param userId - ID of the user.
   * @param productId - ID of the product to add.
   * @param quantity - Number of products to add.
   * @returns The updated CartItem object.
   * @throws NotFoundException if the cart or product is not found.
   */
  async addItemToCart(
    userId: string,
    productId: string,
    quantity: number,
  ): Promise<CartItem> {
    this.logger.log(`Adding product ${productId} to user ${userId}'s cart`);

    // Find or create a cart for the user
    let cart = await this.prisma.cart.findUnique({ where: { userId } });
    if (!cart) {
      cart = await this.prisma.cart.create({ data: { userId } });
    }

    // Check if the product exists
    const product = await this.prisma.product.findUnique({
      where: { id: productId },
    });
    if (!product) {
      this.logger.error(`Product with ID ${productId} not found`);
      throw new NotFoundException('Product not found');
    }

    // Check if the item is already in the cart
    let cartItem = await this.prisma.cartItem.findFirst({
      where: { cartId: cart.id, productId: product.id },
    });

    // Update the quantity if the item exists, or create a new CartItem
    if (cartItem) {
      cartItem = await this.prisma.cartItem.update({
        where: { id: cartItem.id },
        data: { quantity: { increment: quantity } },
      });
    } else {
      cartItem = await this.prisma.cartItem.create({
        data: { cartId: cart.id, productId: product.id, quantity },
      });
    }

    return cartItem;
  }

  // ... More methods for cart management, such as removing items, updating quantities, etc.
}
