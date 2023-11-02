import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ECommerceService } from './ecommerce.service';
import { Product } from '@app/prisma-generated/generated/nestgraphql/product/product.model';
import { Order } from '@app/prisma-generated/generated/nestgraphql/order/order.model';

@Resolver()
export class ECommerceResolver {
  constructor(private eCommerceService: ECommerceService) {}

  /**
   * Retrieves all products available for purchase.
   * @returns An array of Product models with in-stock items.
   */
  @Query(() => [Product])
  async getAllAvailableProducts(): Promise<Product[]> {
    return this.eCommerceService.getAllProducts();
  }

  /**
   * Adds a specified quantity of a product to a user's shopping cart.
   * @param userId - The unique identifier of the user.
   * @param productId - The unique identifier of the product to add to the cart.
   * @param quantity - The amount of the product to add to the cart.
   */
  @Mutation(() => Boolean)
  async addToUserCart(
    @Args('userId') userId: string,
    @Args('productId') productId: string,
    @Args('quantity') quantity: number,
  ): Promise<boolean> {
    await this.eCommerceService.addToCart(userId, productId, quantity);
    return true;
  }

  // Additional resolvers such as placeOrder, removeFromCart, updateQuantity,
  // checkout, and payment will be similar in structure to the above examples.

  /**
   * Processes a user's order based on their current cart.
   * @param userId - The unique identifier of the user placing the order.
   * @returns An Order model representing the placed order.
   */
  @Mutation(() => Order)
  async placeUserOrder(@Args('userId') userId: string): Promise<Order> {
    return this.eCommerceService.placeOrder(userId);
  }

  // ...more resolvers for other operations like updateCart, checkout, etc.
}
