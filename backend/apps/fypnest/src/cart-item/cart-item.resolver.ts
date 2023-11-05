import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CartItemService } from './cart-item.service';
import { CartItem } from '@app/prisma-generated/generated/nestgraphql/cart-item/cart-item.model';
import { Logger } from '@nestjs/common';
import { CartItemCreateInput } from '@app/prisma-generated/generated/nestgraphql/cart-item/cart-item-create.input';
import { CartItemUpdateInput } from '@app/prisma-generated/generated/nestgraphql/cart-item/cart-item-update.input';

@Resolver(() => CartItem)
export class CartItemResolver {
  private readonly logger = new Logger(CartItemResolver.name);

  constructor(private readonly cartItemService: CartItemService) {}

  @Query(() => CartItem, { nullable: true })
  async cartItem(@Args('id') id: string): Promise<CartItem | null> {
    this.logger.log(`Resolving cart item with ID: ${id}`);
    return this.cartItemService.getCartItemById(id);
  }

  @Mutation(() => CartItem)
  async addCartItem(
    @Args('data') data: CartItemCreateInput,
  ): Promise<CartItem> {
    this.logger.log('Resolving add new cart item');
    return this.cartItemService.createCartItem(data);
  }

  @Mutation(() => CartItem)
  async updateCartItem(
    @Args('id') id: string,
    @Args('data') data: CartItemUpdateInput,
  ): Promise<CartItem> {
    this.logger.log(`Resolving update for cart item with ID: ${id}`);
    return this.cartItemService.updateCartItem(id, data);
  }

  @Mutation(() => CartItem)
  async removeCartItem(@Args('id') id: string): Promise<CartItem> {
    this.logger.log(`Resolving remove cart item with ID: ${id}`);
    return this.cartItemService.deleteCartItem(id);
  }
}
