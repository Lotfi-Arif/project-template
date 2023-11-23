import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CartItem } from '@app/prisma-generated/generated/nestgraphql/cart-item/cart-item.model';
import { Cart } from '@app/prisma-generated/generated/nestgraphql/cart/cart.model';
import { Order } from '@app/prisma-generated/generated/nestgraphql/order/order.model';
import { Coupon } from '@app/prisma-generated/generated/nestgraphql/coupon/coupon.model';
import { Prisma } from '@prisma/client';
import { handlePrismaError } from '@app/common/utils';

@Injectable()
export class CartService {
  private readonly logger = new Logger(CartService.name);

  constructor(private prisma: PrismaService) {}

  /**
   * Retrieves a cart by the user's ID, including the items in the cart.
   * @param userId - ID of the user whose cart is to be retrieved.
   * @returns The cart object associated with the user.
   * @throws NotFoundException if the cart is not found for the given user ID.
   */
  async getCartByUserId(userId: string): Promise<Cart> {
    this.logger.log(`Retrieving cart for user ID: ${userId}`);
    try {
      const cart = await this.prisma.cart.findUnique({
        where: { userId },
        include: { cartItems: true },
      });
      if (!cart) {
        this.logger.warn(`Cart not found for user ID: ${userId}`);
        throw new NotFoundException('Cart not found');
      }
      return cart;
    } catch (error) {
      this.logger.error(`Error finding cart for user ID: ${userId}`, error);
      handlePrismaError(error, 'Failed to find cart');
    }
  }

  /**
   * Creates a new cart for a user.
   * @param userId - ID of the user for whom the cart is to be created.
   * @returns A new Cart object associated with the user.
   * @throws InternalServerErrorException if there's an error during cart creation.
   */
  async createCart(userId: string): Promise<Cart> {
    this.logger.log(`Creating a new cart for user ID: ${userId}`);
    try {
      return await this.prisma.$transaction(async (prisma) => {
        return await prisma.cart.create({
          data: { userId },
        });
      });
    } catch (error) {
      this.logger.error(
        `Error creating a new cart for user ID: ${userId}`,
        error,
      );
      handlePrismaError(error, 'Error creating a new cart');
    }
  }

  /**
   * Adds an item to the user's cart or increments the quantity if the item already exists in the cart.
   * @param userId - ID of the user whose cart is being modified.
   * @param productId - ID of the product to add to the cart.
   * @param quantity - Quantity of the product to be added to the cart.
   * @returns The updated CartItem object after adding to the cart.
   * @throws BadRequestException if the quantity is less than or equal to zero.
   * @throws NotFoundException if the cart or product is not found.
   * @throws InternalServerErrorException if there's an error during the process of adding an item.
   */
  async addItemToCart(
    userId: string,
    productId: string,
    quantity: number,
  ): Promise<CartItem> {
    this.logger.log(
      `Adding item to cart: User ID: ${userId}, Product ID: ${productId}, Quantity: ${quantity}`,
    );
    if (quantity <= 0) {
      this.logger.warn('Quantity must be greater than 0');
      throw new BadRequestException('Quantity must be greater than 0');
    }

    return await this.prisma.$transaction(async (prisma) => {
      try {
        let cart = await prisma.cart.findUnique({ where: { userId } });
        if (!cart) {
          this.logger.log(`Creating a new cart for user ID: ${userId}`);
          cart = await prisma.cart.create({ data: { userId } });
        }

        const product = await prisma.product.findUnique({
          where: { id: productId },
        });
        if (!product) {
          this.logger.warn(`Product not found: Product ID: ${productId}`);
          throw new NotFoundException('Product not found');
        }

        // Additional stock check logic would be implemented here

        const cartItem = await prisma.cartItem.findFirst({
          where: { cartId: cart.id, productId: product.id },
        });

        if (cartItem) {
          return await prisma.cartItem.update({
            where: { id: cartItem.id },
            data: { quantity: { increment: quantity } },
          });
        } else {
          return await prisma.cartItem.create({
            data: { cartId: cart.id, productId: product.id, quantity },
          });
        }
      } catch (error) {
        this.logger.error('Failed to add item to cart', error);
        handlePrismaError(error, 'Failed to add item to cart');
      }
    });
  }

  /**
   * Updates the quantity of a specific item in the cart.
   * @param cartItemId - ID of the cart item to update.
   * @param quantity - New quantity for the cart item.
   * @returns The updated CartItem object with the new quantity.
   * @throws BadRequestException if the quantity is negative.
   * @throws NotFoundException if the cart item is not found.
   * @throws InternalServerErrorException if there's an error during the update process.
   */
  async updateCart(cartItemId: string, quantity: number): Promise<CartItem> {
    this.logger.log(
      `Updating cart item: Cart Item ID: ${cartItemId}, Quantity: ${quantity}`,
    );
    if (quantity < 0) {
      this.logger.warn('Quantity cannot be negative');
      throw new BadRequestException('Quantity cannot be negative');
    }

    return await this.prisma.$transaction(async (prisma) => {
      try {
        const cartItem = await prisma.cartItem.findUnique({
          where: { id: cartItemId },
        });
        if (!cartItem) {
          this.logger.warn(`Cart item not found: Cart Item ID: ${cartItemId}`);
          throw new NotFoundException('CartItem not found');
        }

        if (quantity === 0) {
          return await prisma.cartItem.delete({ where: { id: cartItemId } });
        } else {
          return await prisma.cartItem.update({
            where: { id: cartItemId },
            data: { quantity },
          });
        }
      } catch (error) {
        this.logger.error(
          `Error updating cart item: Cart Item ID: ${cartItemId}`,
          error,
        );
        handlePrismaError(error, 'Error updating cart item');
      }
    });
  }

  /**
   * Removes an item from the cart entirely.
   * @param cartItemId - ID of the cart item to be removed.
   * @returns The CartItem object that was removed.
   * @throws NotFoundException if the cart item is not found.
   * @throws InternalServerErrorException if there's an error during the removal process.
   */
  async removeItemFromCart(cartItemId: string): Promise<CartItem> {
    this.logger.log(`Removing cart item: Cart Item ID: ${cartItemId}`);
    return await this.prisma.$transaction(async (prisma) => {
      try {
        const cartItem = await prisma.cartItem.findUnique({
          where: { id: cartItemId },
        });
        if (!cartItem) {
          this.logger.warn(`Cart item not found: Cart Item ID: ${cartItemId}`);
          throw new NotFoundException('Cart item not found');
        }

        return await prisma.cartItem.delete({ where: { id: cartItemId } });
      } catch (error) {
        this.logger.error(
          `Error removing cart item: Cart Item ID: ${cartItemId}`,
          error,
        );
        handlePrismaError(error, 'Error removing cart item');
      }
    });
  }

  /**
   * Clears all items from a user's cart.
   * @param userId - ID of the user whose cart is to be cleared.
   * @returns The Cart object, now emptied of items.
   * @throws NotFoundException if the cart is not found.
   * @throws InternalServerErrorException if there's an error during the clear process.
   */
  async clearCart(userId: string): Promise<Cart> {
    this.logger.log(`Clearing cart for user ID: ${userId}`);
    try {
      return await this.prisma.$transaction(async (prisma) => {
        const cart = await prisma.cart.findUnique({ where: { userId } });
        if (!cart) {
          this.logger.warn(`Cart not found for user ID: ${userId}`);
          throw new NotFoundException('Cart not found');
        }

        await prisma.cartItem.deleteMany({ where: { cartId: cart.id } });
        return cart;
      });
    } catch (error) {
      this.logger.error(`Error clearing cart for user ID: ${userId}`, error);
      handlePrismaError(error, 'Failed to find cart');
    }
  }

  /**
   * Initiates the checkout process for the user's cart.
   * @param userId - ID of the user checking out.
   * @returns An Order object that represents the completed transaction.
   * @throws NotFoundException if the cart is not found.
   * @throws BadRequestException if there's an issue with the cart's contents (e.g., out-of-stock items).
   * @throws InternalServerErrorException if there's an error during the checkout process.
   */
  async checkout(userId: string): Promise<Order> {
    this.logger.log(`Initiating checkout for user ID: ${userId}`);
    try {
      return await this.prisma.$transaction(async (prisma) => {
        const cart = await prisma.cart.findUnique({
          where: { userId },
          include: { cartItems: true, coupon: true },
        });
        if (!cart) {
          this.logger.warn(`Cart not found for user ID: ${userId}`);
          throw new NotFoundException('Cart not found');
        }

        // Inventory checks and order creation logic goes here

        // Example order creation
        const order = await prisma.order.create({
          data: {
            userId,
            totalAmount: this.calculateTotal(cart),
          },
        });

        // Clearing the cart after successful checkout
        await prisma.cartItem.deleteMany({ where: { cartId: cart.id } });

        return order;
      });
    } catch (error) {
      this.logger.error(`Checkout failed for user ID: ${userId}`, error);
      handlePrismaError(error, 'Checkout failed');
    }
  }

  /**
   * Calculates the total cost of the cart including items, discounts, taxes, and shipping.
   * @param cart - The cart for which to calculate the total.
   * @returns The total cost as a number.
   */
  private calculateTotal(cart: Cart): number {
    let total = cart.cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );

    if (cart.discount) {
      if (cart.discount.percentage) {
        total *= 1 - cart.discount.percentage / 100;
      } else if (cart.discount.flatAmount) {
        total -= cart.discount.flatAmount;
      }
    }

    if (cart.coupon) {
      if (cart.coupon.percentage) {
        total *= 1 - cart.coupon.percentage / 100;
      } else if (cart.coupon.flatAmount) {
        total -= cart.coupon.flatAmount;
      }
    }

    const taxRate = 0.08;
    const tax = total * taxRate;
    total += tax;

    const shipping = this.calculateShipping(cart);
    total += shipping;

    if (total < 0) {
      total = 0;
    }

    total = Math.round(total * 100) / 100;

    return total;
  }

  /**
   * Calculates shipping costs based on cart contents and possibly user's location, membership, etc.
   * @param cart - The cart for which to calculate shipping.
   * @returns The shipping cost as a number.
   */
  private calculateShipping(cart: Cart): number {
    // Hypothetical shipping logic
    const baseShippingCost = 5.0; // Base shipping cost
    const freeShippingThreshold = 50.0; // Free shipping for carts over this amount

    if (
      cart.cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      ) >= freeShippingThreshold
    ) {
      return 0; // Free shipping
    } else {
      return baseShippingCost; // Flat rate for simplicity
    }
  }

  // Additional helper methods to calculate discounts, totals, etc.

  /**
   * Applies a coupon to the user's cart and updates the cart's total.
   * @param userId - ID of the user whose cart will receive the coupon.
   * @param couponCode - Code of the coupon to apply.
   * @returns The updated Cart object with the coupon applied.
   * @throws NotFoundException if the cart or coupon is not found.
   * @throws BadRequestException if the coupon is invalid or expired.
   */
  async applyCouponToCart(userId: string, couponCode: string): Promise<Cart> {
    return this.prisma.$transaction(async (prisma) => {
      try {
        const cart = await prisma.cart.findUnique({
          where: { userId },
          include: { cartItems: true },
        });
        if (!cart) {
          throw new NotFoundException('Cart not found');
        }

        const coupon = await prisma.coupon.findUnique({
          where: { code: couponCode },
        });
        if (!coupon) {
          throw new NotFoundException('Coupon not found');
        }

        if (coupon.expiration && coupon.expiration < new Date()) {
          throw new BadRequestException('Coupon is expired');
        }

        const discountValue = this.calculateDiscount(cart, coupon);

        const discountData: Prisma.DiscountCreateArgs = {
          data: {
            // Description and other discount details would be added here.
          },
        };

        if (coupon.percentage) {
          discountData.data.percentage = coupon.percentage;
        } else if (coupon.flatAmount) {
          discountData.data.flatAmount = discountValue;
        }

        const discount = await prisma.discount.create(discountData);

        const updatedCart = await prisma.cart.update({
          where: { id: cart.id },
          data: {
            couponId: coupon.id,
            discountId: discount.id,
          },
        });

        return updatedCart;
      } catch (error) {
        this.logger.error(
          `Failed to apply coupon for user ${userId}: ${error.message}`,
          error.stack,
        );
        handlePrismaError(error, 'Failed to apply coupon');
      }
    });
  }

  /**
   * Applies a coupon to the user's cart and updates the cart's total.
   * @param userId - ID of the user whose cart will receive the coupon.
   * @param couponCode - Code of the coupon to apply.
   * @returns The updated Cart object with the coupon applied.
   * @throws NotFoundException if the cart or coupon is not found.
   * @throws BadRequestException if the coupon is invalid or expired.
   */
  private calculateDiscount(cart: Cart, coupon: Coupon): number {
    let discount = 0;
    if (coupon.percentage) {
      discount = cart.cartItems.reduce(
        (sum, item) =>
          sum + item.price * (coupon.percentage / 100) * item.quantity,
        0,
      );
    } else if (coupon.flatAmount) {
      discount = coupon.flatAmount;
    }
    return discount;
  }
}
