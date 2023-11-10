import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CartItem } from '@app/prisma-generated/generated/nestgraphql/cart-item/cart-item.model';
import { Prisma } from '@prisma/client';
import { handlePrismaError } from '@app/common/utils';

@Injectable()
export class CartItemService {
  private readonly logger = new Logger(CartItemService.name);

  constructor(private prisma: PrismaService) {}

  /**
   * Adds a new item to a cart.
   * @param data - Data for creating a cart item.
   * @returns The newly created cart item.
   */
  async createCartItem(
    cartItemCreateArgs: Prisma.CartItemCreateArgs,
  ): Promise<CartItem> {
    this.logger.log('Adding a new item to the cart');
    try {
      return await this.prisma.cartItem.create({
        data: cartItemCreateArgs.data,
      });
    } catch (error) {
      this.logger.error('Failed to add an item to the cart', { error });
      handlePrismaError(error);
    }
  }

  /**
   * Retrieves a cart item by its ID.
   * @param id - The ID of the cart item.
   * @returns The cart item or null if not found.
   * @throws NotFoundException if the cart item is not found.
   */
  async getCartItemById(id: string): Promise<CartItem | null> {
    this.logger.log(`Retrieving cart item by ID: ${id}`);
    try {
      const cartItem = await this.prisma.cartItem.findUnique({ where: { id } });
      if (!cartItem) {
        throw new Prisma.PrismaClientKnownRequestError(
          'Record not found', // Message
          {
            code: 'P2025',
            clientVersion: Prisma.prismaVersion.client,
            meta: { target: ['cartItem'] },
          },
        );
      }
      return cartItem;
    } catch (error) {
      this.logger.error(`Failed to retrieve cart item by ID: ${id}`, { error });
      handlePrismaError(error);
    }
  }

  /**
   * Updates a cart item by its ID.
   * @param id - The ID of the cart item.
   * @param data - The update data.
   * @returns The updated cart item.
   * @throws NotFoundException if the cart item to update is not found.
   */
  async updateCartItem(
    cartUpdateArgs: Prisma.CartItemUpdateArgs,
  ): Promise<CartItem> {
    this.logger.log(`Updating cart item with ID: ${cartUpdateArgs.where.id}`);
    try {
      return await this.prisma.cartItem.update(cartUpdateArgs);
    } catch (error) {
      this.logger.error(
        `Failed to update cart item with ID: ${cartUpdateArgs.where.id}`,
        { error },
      );
      handlePrismaError(error);
    }
  }

  /**
   * Removes a cart item from the cart by its ID.
   * @param id - The ID of the cart item to be removed.
   * @returns The removed cart item.
   * @throws NotFoundException if the cart item to be removed is not found.
   */
  async deleteCartItem(id: string): Promise<CartItem> {
    this.logger.log(`Removing cart item with ID: ${id}`);
    try {
      return await this.prisma.cartItem.delete({
        where: { id },
      });
    } catch (error) {
      this.logger.error(`Failed to remove cart item with ID: ${id}`, { error });
      handlePrismaError(error);
    }
  }
}
