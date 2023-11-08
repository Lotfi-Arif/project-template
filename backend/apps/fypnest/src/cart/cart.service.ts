// cart.service.ts

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

@Injectable()
export class CartService {
  private readonly logger = new Logger(CartService.name);

  constructor(private prisma: PrismaService) {}

  // Retrieves a cart by the user's ID, including the items in the cart
  async getCartByUserId(userId: string): Promise<Cart> {
    const cart = await this.prisma.cart.findUnique({
      where: { userId },
      include: { cartItems: true },
    });
    if (!cart) {
      throw new NotFoundException('Cart not found');
    }
    return cart;
  }

  // Creates a new cart for a user
  async createCart(userId: string): Promise<Cart> {
    return this.prisma.cart.create({
      data: { userId },
    });
  }

  // Adds an item to the user's cart or increments the quantity if the item already exists in the cart
  async addItemToCart(
    userId: string,
    productId: string,
    quantity: number,
  ): Promise<CartItem> {
    // Ensure the quantity is a positive integer
    if (quantity <= 0) {
      throw new BadRequestException('Quantity must be greater than 0');
    }

    // Use a transaction to ensure atomicity of the cart update
    return this.prisma.$transaction(async (prisma) => {
      // Find or create a cart for the user
      let cart = await prisma.cart.findUnique({ where: { userId } });
      if (!cart) {
        cart = await prisma.cart.create({ data: { userId } });
      }

      // Verify that the product exists and has enough stock
      const product = await prisma.product.findUnique({
        where: { id: productId },
      });
      if (!product) {
        throw new NotFoundException('Product not found');
      }

      // Stock check logic would go here (not implemented)

      // Determine if the product is already in the cart
      const cartItem = await prisma.cartItem.findFirst({
        where: { cartId: cart.id, productId: product.id },
      });

      // If the item exists, update its quantity, otherwise create a new cart item
      if (cartItem) {
        return prisma.cartItem.update({
          where: { id: cartItem.id },
          data: { quantity: { increment: quantity } },
        });
      } else {
        return prisma.cartItem.create({
          data: { cartId: cart.id, productId: product.id, quantity },
        });
      }
    });
  }

  // Updates the quantity of a specific item in the cart
  async updateCartItem(
    cartItemId: string,
    quantity: number,
  ): Promise<CartItem> {
    // Ensure the quantity is not negative
    if (quantity < 0) {
      throw new BadRequestException('Quantity cannot be negative');
    }

    // Using a transaction for potential additional atomic operations
    return this.prisma.$transaction(async (prisma) => {
      // Find the cart item by ID
      const cartItem = await prisma.cartItem.findUnique({
        where: { id: cartItemId },
      });
      if (!cartItem) {
        throw new NotFoundException('CartItem not found');
      }

      // If the new quantity is 0, remove the item from the cart
      if (quantity === 0) {
        await prisma.cartItem.delete({
          where: { id: cartItemId },
        });
        return null;
      } else {
        // Update the cart item with the new quantity
        return prisma.cartItem.update({
          where: { id: cartItemId },
          data: { quantity },
        });
      }
    });
  }

  // Removes an item from the cart entirely
  async removeCartItem(cartItemId: string): Promise<CartItem> {
    // Delete the item from the cart and return the result
    return this.prisma.cartItem.delete({
      where: { id: cartItemId },
    });
  }

  // Clears all items from a user's cart
  async clearCart(userId: string): Promise<Cart> {
    // Use a transaction to delete all items atomically
    return this.prisma.$transaction(async (prisma) => {
      // Ensure the cart exists for the user
      const cart = await prisma.cart.findUnique({
        where: { userId },
      });
      if (!cart) {
        throw new NotFoundException('Cart not found');
      }

      // Delete all cart items associated with the cart
      await prisma.cartItem.deleteMany({
        where: { cartId: cart.id },
      });

      // Return the now-empty cart
      return cart;
    });
  }

  /**
   * Initiates the checkout process for the user's cart.
   * @param userId - ID of the user checking out.
   * @returns An Order object that represents the completed transaction.
   * @throws NotFoundException if the cart is not found.
   * @throws BadRequestException if there's an issue with the cart's contents (e.g., out-of-stock items).
   */
  async checkout(userId: string): Promise<Order> {
    return this.prisma.$transaction(async (prisma) => {
      const cart = await prisma.cart.findUnique({
        where: { userId },
        include: { cartItems: true, coupon: true },
      });
      if (!cart) {
        throw new NotFoundException('Cart not found');
      }

      // Check the inventory for each item in the cart
      for (const item of cart.cartItems) {
        const product = await prisma.product.findUnique({
          where: { id: item.productId },
        });
        if (!product || product.stock < item.quantity) {
          throw new BadRequestException(
            `Product ${item.productId} is out of stock.`,
          );
        }
        // Update the product's stock
        await prisma.product.update({
          where: { id: item.productId },
          data: { stock: { decrement: item.quantity } },
        });
      }

      // Here you would calculate the final total, taking into account any discounts, taxes, shipping costs, etc.
      const total = this.calculateTotal(cart);

      // Create an order record
      const order = await prisma.order.create({
        data: {
          userId,
          totalAmount: total,
          // TODO: Add other order details such as shipping address, payment method, etc.
        },
      });

      if (cart.coupon && cart.coupon.oneTimeUse) {
        await prisma.coupon.update({
          where: { id: cart.couponId },
          data: {
            /* logic to mark as used */
          },
        });
      }

      // Clear the cart after successful checkout
      await prisma.cartItem.deleteMany({
        where: { cartId: cart.id },
      });

      return order;
    });
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
   * This is a placeholder function and would need to be implemented based on your shipping logic.
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

      // Check if coupon already applied or one-time use logic...
      // Calculate the discount based on the coupon
      const discountValue = this.calculateDiscount(cart, coupon);

      // Create a new discount record with the calculated discount value
      const discountData: Prisma.DiscountCreateArgs = {
        data: {
          description: '',
        },
      };

      // Determine the type of discount and assign the value to the correct field
      if (coupon.percentage) {
        discountData.data.percentage = coupon.percentage;
      } else if (coupon.flatAmount) {
        discountData.data.flatAmount = discountValue; // Use the calculated flat amount discount value
      }

      const discount = await prisma.discount.create({
        data: discountData,
      });

      // Apply the coupon and discount to the cart
      const updatedCart = await prisma.cart.update({
        where: { id: cart.id },
        data: {
          couponId: coupon.id,
          discountId: discount.id, // Connect the discount record to the cart
        },
      });

      return updatedCart;
    });
  }

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
