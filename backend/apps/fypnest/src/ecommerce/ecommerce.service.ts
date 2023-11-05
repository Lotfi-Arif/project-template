import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Product } from '@app/prisma-generated/generated/nestgraphql/product/product.model';
import { CartItem } from '@app/prisma-generated/generated/nestgraphql/cart-item/cart-item.model';
import { Order } from '@app/prisma-generated/generated/nestgraphql/order/order.model';
import { OrderStatus } from '@app/prisma-generated/generated/nestgraphql/prisma/order-status.enum';

@Injectable()
export class ECommerceService {
  private readonly logger = new Logger(ECommerceService.name);

  constructor(private prisma: PrismaService) {}

  /**
   * Retrieves all products available in the inventory.
   * @returns An array of Product objects.
   */
  async getAllProducts(): Promise<Product[]> {
    this.logger.log('Fetching all products');
    try {
      return await this.prisma.product.findMany({
        where: { stock: { gt: 0 } }, // Ensuring only in-stock products are shown
      });
    } catch (error) {
      this.logger.error('Failed to fetch products', error);
      throw error;
    }
  }

  /**
   * Adds a product to the user's cart.
   * @param userId - The ID of the user whose cart will be updated.
   * @param productId - The ID of the product to add to the cart.
   * @param quantity - The quantity of the product to add.
   * @returns void
   */
  async addToCart(
    userId: string,
    productId: string,
    quantity: number,
  ): Promise<void> {
    this.logger.log(`Adding product ${productId} to user ${userId}'s cart`);
    try {
      const product = await this.prisma.product.findUnique({
        where: { id: productId },
      });
      if (!product) {
        throw new Error('Product not found');
      }
      const cart = await this.prisma.cart.findFirst({
        where: { userId: userId },
      });
      if (!cart) {
        throw new Error('Cart not found for user');
      }
      await this.prisma.cartItem.upsert({
        where: { id: `${cart.id}_${productId}` }, // Assuming the id is a combination of cartId and productId
        update: { quantity: { increment: quantity } },
        create: {
          id: `${cart.id}_${productId}`,
          quantity,
          product: {
            connect: { id: productId },
          },
          cart: {
            connect: { id: cart.id },
          },
        },
      });
      this.logger.log(`Product ${productId} added to user ${userId}'s cart`);
    } catch (error) {
      this.logger.error('Failed to add product to cart', error);
      throw error;
    }
  }

  /**
   * Places an order for the user.
   * @param userId - The ID of the user placing the order.
   * @returns An Order object representing the placed order.
   */
  async placeOrder(userId: string): Promise<Order> {
    this.logger.log(`Placing order for user ${userId}`);
    try {
      const userCart = await this.prisma.cart.findFirst({
        where: { userId },
        include: { cartItems: true },
      });

      if (!userCart || userCart.cartItems.length === 0) {
        throw new NotFoundException('No items in cart to place an order');
      }

      // Calculate the total amount here (assuming the Product model has a 'price' field)
      let totalAmount = 0;
      for (const item of userCart.cartItems) {
        const product = await this.prisma.product.findUnique({
          where: { id: item.productId },
        });

        if (!product || product.stock < item.quantity) {
          throw new Error(`Insufficient stock for product ${item.productId}`);
        }

        // Assuming there's a 'price' field on the product
        totalAmount += product.price * item.quantity;
      }

      // Reduce stock and create order
      const order = await this.prisma.order.create({
        data: {
          // Connect the user to the order
          user: {
            connect: {
              id: userId,
            },
          },
          totalAmount,
          status: 'PENDING', // Make sure you have the correct status from your OrderStatus enum
          items: {
            create: userCart.cartItems.map((item) => ({
              quantity: item.quantity,
              cart: {
                connect: {
                  id: userCart.id, // Assuming 'id' is the correct identifier for the Cart
                },
              },
              product: {
                connect: {
                  id: item.productId,
                },
              },
            })),
          },
          // Assuming you're handling payments elsewhere
        },
      });

      // Clear the cart after order is placed
      await this.prisma.cartItem.deleteMany({
        where: { cartId: userCart.id },
      });

      this.logger.log(`Order ${order.id} placed for user ${userId}`);
      return order;
    } catch (error) {
      this.logger.error('Failed to place order', error);
      throw error;
    }
  }

  /**
   * Updates the quantity of a product in the user's cart.
   * @param userId - The ID of the user whose cart will be updated.
   * @param productId - The ID of the product in the cart.
   * @param quantity - The new quantity of the product.
   * @returns An updated CartItem object.
   */
  async updateCartItem(
    userId: string,
    productId: string,
    quantity: number,
  ): Promise<CartItem> {
    this.logger.log(
      `Updating quantity for product ${productId} in user ${userId}'s cart`,
    );
    try {
      const cart = await this.prisma.cart.findFirst({
        where: { userId },
      });
      if (!cart) {
        throw new NotFoundException('Cart not found for user');
      }
      const updatedItem = await this.prisma.cartItem.update({
        where: { id: `${cart.id}_${productId}` },
        data: { quantity },
      });
      return updatedItem;
    } catch (error) {
      this.logger.error('Failed to update cart item', error);
      throw error;
    }
  }

  /**
   * Updates the status of an existing order.
   *
   * @param orderId - The ID of the order to update. Expected to be a string.
   * @param newStatus - The new status to set for the order. Expected to be a value from the OrderStatus enum.
   * @returns A Promise that resolves to the updated Order object.
   */
  async updateOrderStatus(
    orderId: string,
    newStatus: OrderStatus,
  ): Promise<Order> {
    // First, fetch the current order to get the current status
    const currentOrder = await this.prisma.order.findUnique({
      where: { id: orderId },
    });

    if (!currentOrder) {
      throw new NotFoundException('Order not found');
    }

    // Here you might want to add any specific business logic checks
    // to validate if the status transition is allowed.

    // Update the status of the order
    const updatedOrder = await this.prisma.order.update({
      where: { id: orderId },
      data: { status: newStatus },
    });

    // Handle any business logic that should occur as a result of the status update
    switch (newStatus) {
      case OrderStatus.CONFIRMED:
        // Logic for CONFIRMED status
        // Example: Notify the warehouse to prepare the order
        break;
      case OrderStatus.SHIPPED:
        // Logic for SHIPPED status
        // Example: Send tracking information to the user
        break;
      case OrderStatus.DELIVERED:
        // Logic for DELIVERED status
        // Example: Confirm order delivery and request customer feedback
        break;
      case OrderStatus.CANCELLED:
        // Logic for CANCELLED status
        // Example: Handle inventory restocking and process any refunds
        break;
      // Include additional case statements for other order statuses
      default:
        // Optionally handle any statuses not explicitly covered above
        break;
    }

    // Return the updated order object after the status has been updated
    return updatedOrder;
  }

  // /**
  //  * Updates the quantity of a product in a user's cart.
  //  * If the new quantity is 0, the item is removed from the cart.
  //  */
  // async updateCartItemQuantity(
  //   cartItemId: string,
  //   newQuantity: number,
  // ): Promise<void> {
  //   if (newQuantity <= 0) {
  //     // If the quantity is zero or less, remove the item instead of updating
  //     return this.removeCartItem(cartItemId);
  //   }

  //   // Update the cart item with the new quantity
  //   const updateResult = await this.databaseService.updateCartItem(
  //     cartItemId,
  //     newQuantity,
  //   );
  //   if (!updateResult) {
  //     throw new NotFoundException(`Cart item with ID ${cartItemId} not found.`);
  //   }
  // }

  // /**
  //  * Removes a product from the user's cart.
  //  */
  // async removeCartItem(cartItemId: string): Promise<void> {
  //   const deleteResult = await this.databaseService.deleteCartItem(cartItemId);
  //   if (!deleteResult) {
  //     throw new NotFoundException(`Cart item with ID ${cartItemId} not found.`);
  //   }
  // }

  // /**
  //  * Processes the user's checkout, creating an order and initiating a payment transaction.
  //  */
  // async processCheckout(userId: string): Promise<Payment> {
  //   // Check the user's cart and calculate total cost
  //   const cartItems = await this.databaseService.getCartItemsForUser(userId);
  //   if (cartItems.length === 0) {
  //     throw new NotFoundException(
  //       `No items in the cart for user ID ${userId}.`,
  //     );
  //   }

  //   const totalCost = cartItems.reduce(
  //     (sum, item) => sum + item.product.price * item.quantity,
  //     0,
  //   );

  //   // Create an order in the database
  //   const order = await this.databaseService.createOrder(
  //     userId,
  //     cartItems,
  //     totalCost,
  //   );

  //   // Process payment (in a real-world scenario, integrate with a payment provider)
  //   const payment = await this.databaseService.processPayment(
  //     order.id,
  //     totalCost,
  //   );

  //   return payment;
  // }

  // /**
  //  * Records a payment for an order into the system.
  //  */
  // async recordPayment(
  //   orderId: string,
  //   paymentMethod: string,
  //   amount: number,
  // ): Promise<Payment> {
  //   // Check if the order exists
  //   const order = await this.databaseService.getOrderById(orderId);
  //   if (!order) {
  //     throw new NotFoundException(`Order with ID ${orderId} not found.`);
  //   }

  //   // Check if the payment amount matches the order's total
  //   if (order.total !== amount) {
  //     throw new Error(
  //       `Payment amount ${amount} does not match order total ${order.total}.`,
  //     );
  //   }

  //   // Record the payment into the database
  //   const payment = await this.databaseService.createPaymentRecord(
  //     orderId,
  //     paymentMethod,
  //     amount,
  //   );

  //   return payment;
  // }
}
