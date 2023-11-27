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
   * @param cartItemCreateArgs - Data for creating a cart item.
   * @returns The newly created cart item.
   */
  async createCartItem(
    cartItemCreateArgs: Prisma.CartItemCreateArgs,
  ): Promise<CartItem> {
    this.logger.log('Attempting to add a new item to the cart');
    try {
      const newCartItem = await this.prisma.cartItem.create(cartItemCreateArgs);
      this.logger.log(`New cart item added with ID: ${newCartItem.id}`);
      return newCartItem;
    } catch (error) {
      this.logger.error('Error adding a new cart item', {
        error,
        cartItemCreateArgs,
      });
      handlePrismaError(error, 'Failed to add a new cart item');
    }
  }

  /**
   * Retrieves a cart item by its ID.
   * @param id - The ID of the cart item.
   * @returns The cart item or null if not found.
   * @throws NotFoundException if the cart item is not found.
   */
  async getCartItemById(id: string): Promise<CartItem | null> {
    this.logger.log(`Retrieving cart item with ID: ${id}`);
    try {
      const cartItem = await this.prisma.cartItem.findUnique({ where: { id } });
      if (!cartItem) {
        this.logger.warn(`Cart item not found with ID: ${id}`);
        handlePrismaError(
          { code: 'P2025' },
          `Cart item with ID ${id} not found`,
        );
      }
      return cartItem;
    } catch (error) {
      this.logger.error(`Error retrieving cart item with ID: ${id}`, { error });
      handlePrismaError(error, 'Failed to retrieve cart item');
    }
  }

  /**
   * Updates a cart item by its ID.
   * @param cartUpdateArgs - The arguments for the update operation.
   * @returns The updated cart item.
   * @throws NotFoundException if the cart item to update is not found.
   */
  async updateCartItem(
    cartUpdateArgs: Prisma.CartItemUpdateArgs,
  ): Promise<CartItem> {
    this.logger.log(`Updating cart item with ID: ${cartUpdateArgs.where.id}`);
    try {
      const updatedCartItem = await this.prisma.cartItem.update(cartUpdateArgs);
      this.logger.log(`Cart item with ID ${cartUpdateArgs.where.id} updated`);
      return updatedCartItem;
    } catch (error) {
      this.logger.error(
        `Error updating cart item with ID: ${cartUpdateArgs.where.id}`,
        { error },
      );
      handlePrismaError(error, 'Failed to update cart item');
    }
  }

  /**
   * Removes a cart item from the cart by its ID.
   * @param id - The ID of the cart item to be removed.
   * @returns The removed cart item.
   * @throws NotFoundException if the cart item to be removed is not found.
   */
  async deleteCartItem(id: string): Promise<CartItem> {
    this.logger.log(`Attempting to remove cart item with ID: ${id}`);
    try {
      // Using a Prisma transaction to ensure data integrity
      return await this.prisma.$transaction(async (prisma) => {
        const cartItem = await prisma.cartItem.findUnique({ where: { id } });
        if (!cartItem) {
          this.logger.warn(`Cart item not found with ID: ${id}`);
          handlePrismaError(
            { code: 'P2025' },
            `Cart item with ID ${id} not found`,
          );
        }
        return await prisma.cartItem.delete({ where: { id } });
      });
    } catch (error) {
      this.logger.error(`Error removing cart item with ID: ${id}`, { error });
      handlePrismaError(error, 'Failed to remove cart item');
    }
  }
}
