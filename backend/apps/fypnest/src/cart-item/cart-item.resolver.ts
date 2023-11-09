import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CartItemService } from './cart-item.service';
import { CartItem } from '@app/prisma-generated/generated/nestgraphql/cart-item/cart-item.model';
import { Logger } from '@nestjs/common';
import { CreateOneCartItemArgs } from '@app/prisma-generated/generated/nestgraphql/cart-item/create-one-cart-item.args';
import { UpdateOneCartItemArgs } from '@app/prisma-generated/generated/nestgraphql/cart-item/update-one-cart-item.args';
import { handleHttpError } from '@app/common/utils';

@Resolver(() => CartItem)
export class CartItemResolver {
  private readonly logger = new Logger(CartItemResolver.name);

  constructor(private readonly cartItemService: CartItemService) {}

  @Query(() => CartItem, { nullable: true })
  async cartItem(@Args('id') id: string): Promise<CartItem | null> {
    try {
      this.logger.log(`Resolving cart item with ID: ${id}`);
      return await this.cartItemService.getCartItemById(id);
    } catch (error) {
      this.logger.error(`Failed to resolve cart item with ID: ${id}`, {
        error,
      });
      handleHttpError(error, 'Failed to resolve cart item');
    }
  }

  @Mutation(() => CartItem)
  async addCartItem(
    @Args('data') createOneCartItemArgs: CreateOneCartItemArgs,
  ): Promise<CartItem> {
    try {
      this.logger.log('Resolving add new cart item');
      return await this.cartItemService.createCartItem({
        data: createOneCartItemArgs.data,
      });
    } catch (error) {
      this.logger.error('Failed to add new cart item', { error });
      handleHttpError(error, 'Failed to add new cart item');
    }
  }

  @Mutation(() => CartItem)
  async updateCartItem(
    @Args('id') id: string,
    @Args('data') updateOneCartItemArgs: UpdateOneCartItemArgs,
  ): Promise<CartItem> {
    try {
      this.logger.log(`Resolving update for cart item with ID: ${id}`);
      return await this.cartItemService.updateCartItem(
        id,
        updateOneCartItemArgs,
      );
    } catch (error) {
      this.logger.error(`Failed to resolve cart item with ID: ${id}`, {
        error,
      });
      handleHttpError(error, 'Failed to resolve cart item');
    }
  }

  @Mutation(() => CartItem)
  async removeCartItem(@Args('id') id: string): Promise<CartItem> {
    try {
      this.logger.log(`Resolving remove cart item with ID: ${id}`);
      return await this.cartItemService.deleteCartItem(id);
    } catch (error) {
      this.logger.error('Failed to remove cart item', { error });
      handleHttpError(error, 'Failed to remove cart item');
    }
  }
}
