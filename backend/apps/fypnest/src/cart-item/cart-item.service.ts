import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CartItem } from '@app/prisma-generated/generated/nestgraphql/cart-item/cart-item.model';
import { CartItemCreateInput } from '@app/prisma-generated/generated/nestgraphql/cart-item/cart-item-create.input';
import { CartItemUpdateInput } from '@app/prisma-generated/generated/nestgraphql/cart-item/cart-item-update.input';

@Injectable()
export class CartItemService {
  private readonly logger = new Logger(CartItemService.name);

  constructor(private prisma: PrismaService) {}

  /**
   * Adds a new item to a cart.
   * @param data - Data for creating a cart item.
   * @returns The newly created cart item.
   */
  async createCartItem(data: CartItemCreateInput): Promise<CartItem> {
    this.logger.log('Adding a new item to the cart');
    try {
      const cartItem = await this.prisma.cartItem.create({ data });
      return cartItem;
    } catch (error) {
      this.logger.error('Failed to add an item to the cart', error.stack);
      throw error;
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
    const cartItem = await this.prisma.cartItem.findUnique({ where: { id } });
    if (!cartItem) {
      this.logger.warn(`Cart item with ID ${id} not found`);
      throw new NotFoundException('Cart item not found');
    }
    return cartItem;
  }

  /**
   * Updates a cart item by its ID.
   * @param id - The ID of the cart item.
   * @param data - The update data.
   * @returns The updated cart item.
   * @throws NotFoundException if the cart item to update is not found.
   */
  async updateCartItem(
    id: string,
    data: CartItemUpdateInput,
  ): Promise<CartItem> {
    this.logger.log(`Updating cart item with ID: ${id}`);
    try {
      const updatedCartItem = await this.prisma.cartItem.update({
        where: { id },
        data,
      });
      return updatedCartItem;
    } catch (error) {
      this.logger.error(
        `Failed to update cart item with ID: ${id}`,
        error.stack,
      );
      throw new NotFoundException('Cart item not found');
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
      const deletedCartItem = await this.prisma.cartItem.delete({
        where: { id },
      });
      return deletedCartItem;
    } catch (error) {
      this.logger.error(
        `Failed to remove cart item with ID: ${id}`,
        error.stack,
      );
      throw new NotFoundException('Cart item not found');
    }
  }
}
