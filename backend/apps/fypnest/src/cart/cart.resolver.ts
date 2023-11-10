import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CartService } from './cart.service';
import { Cart } from '@app/prisma-generated/generated/nestgraphql/cart/cart.model';
import { CartItem } from '@app/prisma-generated/generated/nestgraphql/cart-item/cart-item.model';
import { Order } from '@app/prisma-generated/generated/nestgraphql/order/order.model';
import { Logger } from '@nestjs/common';
import { handleHttpError } from '@app/common/utils';
import { CreateOneCartArgs } from '@app/prisma-generated/generated/nestgraphql/cart/create-one-cart.args';
import { PrismaSelect } from '@paljs/plugins';

@Resolver(() => Cart)
export class CartResolver {
  private readonly logger = new Logger(CartResolver.name);

  constructor(private readonly cartService: CartService) {}

  // Query to get a cart by user ID
  @Query(() => Cart)
  async getCartByUserId(@Args('userId') userId: string): Promise<Cart> {
    try {
      this.logger.log(`Retrieving cart for user with ID ${userId}`);
      return this.cartService.getCartByUserId(userId);
    } catch (error) {
      this.logger.error(`Failed to retrieve cart for user with ID ${userId}`, {
        error,
      });
      throw handleHttpError(error, 'Failed to retrieve cart');
    }
  }

  // Mutation to create a new cart for a user
  @Mutation(() => Cart)
  async createCart(
    @Args() createCart: CreateOneCartArgs,
    @Info() info,
  ): Promise<Cart> {
    try {
      this.logger.log(
        `Creating a new cart for user with ID ${createCart.data.user.connect.id}`,
      );
      const cart = new PrismaSelect(info).value;
      return this.cartService.createCart({
        ...createCart,
        ...cart,
      });
    } catch (error) {
      this.logger.error(
        `Failed to create a new cart for user with ID ${createCart.data.user.connect.id}`,
        { error },
      );
      throw handleHttpError(error, 'Failed to create a new cart');
    }
  }

  // Mutation to add an item to the cart
  @Mutation(() => CartItem)
  async addItemToCart(
    @Args('userId') userId: string,
    @Args('productId') productId: string,
    @Args('quantity') quantity: number,
  ): Promise<CartItem> {
    try {
      this.logger.log(
        `Adding item with ID ${productId} to user's cart with ID ${userId}`,
      );
      return this.cartService.addItemToCart(userId, productId, quantity);
    } catch (error) {
      this.logger.error(
        `Failed to add item with ID ${productId} to user's cart with ID ${userId}`,
        { error },
      );
      throw handleHttpError(error, 'Failed to add item to cart');
    }
  }

  // Mutation to update the quantity of an item in the cart
  @Mutation(() => CartItem)
  async updateCartItem(
    @Args('cartItemId') cartItemId: string,
    @Args('quantity') quantity: number,
  ): Promise<CartItem> {
    try {
      this.logger.log(
        `Updating cart item with ID ${cartItemId} to quantity ${quantity}`,
      );
      return this.cartService.updateCartItem(cartItemId, quantity);
    } catch (error) {
      this.logger.error(
        `Failed to update cart item with ID ${cartItemId} to quantity ${quantity}`,
        { error },
      );
      throw handleHttpError(error, 'Failed to update cart item');
    }
  }

  // Mutation to remove an item from the cart
  @Mutation(() => CartItem)
  async removeCartItem(
    @Args('cartItemId') cartItemId: string,
  ): Promise<CartItem> {
    try {
      this.logger.log(`Removing cart item with ID ${cartItemId}`);
      return this.cartService.removeCartItem(cartItemId);
    } catch (error) {
      this.logger.error(`Failed to remove cart item with ID ${cartItemId}`, {
        error,
      });
      throw handleHttpError(error, 'Failed to remove cart item');
    }
  }

  // Mutation to clear a user's cart
  @Mutation(() => Cart)
  async clearCart(@Args('userId') userId: string): Promise<Cart> {
    try {
      this.logger.log(`Clearing cart for user with ID ${userId}`);
      return this.cartService.clearCart(userId);
    } catch (error) {
      this.logger.error(`Failed to clear cart for user with ID ${userId}`, {
        error,
      });
      throw handleHttpError(error, 'Failed to clear cart');
    }
  }

  // Mutation to checkout a user's cart
  @Mutation(() => Order)
  async checkout(@Args('userId') userId: string): Promise<Order> {
    try {
      this.logger.log(`Initiating checkout for user with ID ${userId}`);
      return this.cartService.checkout(userId);
    } catch (error) {
      this.logger.error(
        `Failed to initiate checkout for user with ID ${userId}`,
        {
          error,
        },
      );
      throw handleHttpError(error, 'Failed to initiate checkout');
    }
  }

  // Mutation to apply a coupon to a user's cart
  @Mutation(() => Cart)
  async applyCouponToCart(
    @Args('userId') userId: string,
    @Args('couponCode') couponCode: string,
  ): Promise<Cart> {
    try {
      this.logger.log(
        `Applying coupon with code ${couponCode} to user's cart with ID ${userId}`,
      );
      return this.cartService.applyCouponToCart(userId, couponCode);
    } catch (error) {
      this.logger.error(
        `Failed to apply coupon with code ${couponCode} to user's cart with ID ${userId}`,
        { error },
      );
      throw handleHttpError(error, 'Failed to apply coupon to cart');
    }
  }
}
