// cart.resolver.ts

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CartService } from './cart.service';
import { Cart } from '@app/prisma-generated/generated/nestgraphql/cart/cart.model';
import { CartItem } from '@app/prisma-generated/generated/nestgraphql/cart-item/cart-item.model';
import { Order } from '@app/prisma-generated/generated/nestgraphql/order/order.model';
import { Logger } from '@nestjs/common';

@Resolver(() => Cart)
export class CartResolver {
  private readonly logger = new Logger(CartResolver.name);

  constructor(private readonly cartService: CartService) {}

  // Query to get a cart by user ID
  @Query(() => Cart)
  async getCartByUserId(@Args('userId') userId: string): Promise<Cart> {
    this.logger.log(`Retrieving cart for user with ID ${userId}`);
    return this.cartService.getCartByUserId(userId);
  }

  // Mutation to create a new cart for a user
  @Mutation(() => Cart)
  async createCart(@Args('userId') userId: string): Promise<Cart> {
    this.logger.log(`Creating a new cart for user with ID ${userId}`);
    return this.cartService.createCart(userId);
  }

  // Mutation to add an item to the cart
  @Mutation(() => CartItem)
  async addItemToCart(
    @Args('userId') userId: string,
    @Args('productId') productId: string,
    @Args('quantity') quantity: number,
  ): Promise<CartItem> {
    this.logger.log(
      `Adding item with ID ${productId} to user's cart with ID ${userId}`,
    );
    return this.cartService.addItemToCart(userId, productId, quantity);
  }

  // Mutation to update the quantity of an item in the cart
  @Mutation(() => CartItem)
  async updateCartItem(
    @Args('cartItemId') cartItemId: string,
    @Args('quantity') quantity: number,
  ): Promise<CartItem> {
    this.logger.log(
      `Updating cart item with ID ${cartItemId} to quantity ${quantity}`,
    );
    return this.cartService.updateCartItem(cartItemId, quantity);
  }

  // Mutation to remove an item from the cart
  @Mutation(() => CartItem)
  async removeCartItem(
    @Args('cartItemId') cartItemId: string,
  ): Promise<CartItem> {
    this.logger.log(`Removing cart item with ID ${cartItemId}`);
    return this.cartService.removeCartItem(cartItemId);
  }

  // Mutation to clear a user's cart
  @Mutation(() => Cart)
  async clearCart(@Args('userId') userId: string): Promise<Cart> {
    this.logger.log(`Clearing cart for user with ID ${userId}`);
    return this.cartService.clearCart(userId);
  }

  // Mutation to checkout a user's cart
  @Mutation(() => Order)
  async checkout(@Args('userId') userId: string): Promise<Order> {
    this.logger.log(`Initiating checkout for user with ID ${userId}`);
    return this.cartService.checkout(userId);
  }

  // Mutation to apply a coupon to a user's cart
  @Mutation(() => Cart)
  async applyCouponToCart(
    @Args('userId') userId: string,
    @Args('couponCode') couponCode: string,
  ): Promise<Cart> {
    this.logger.log(
      `Applying coupon with code ${couponCode} to user's cart with ID ${userId}`,
    );
    return this.cartService.applyCouponToCart(userId, couponCode);
  }
}
