import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ECommerceService } from './ecommerce.service';
import { Product } from '@app/prisma-generated/generated/nestgraphql/product/product.model';
import { Order } from '@app/prisma-generated/generated/nestgraphql/order/order.model';
// import { Payment } from '@app/prisma-generated/generated/nestgraphql/payment/payment.model';

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

  /**
   * Processes a user's order based on their current cart.
   * @param userId - The unique identifier of the user placing the order.
   * @returns An Order model representing the placed order.
   */
  @Mutation(() => Order)
  async placeUserOrder(@Args('userId') userId: string): Promise<Order> {
    return this.eCommerceService.placeOrder(userId);
  }

  // /**
  //  * Updates the quantity of a product in the user's cart.
  //  * @param cartItemId - The unique identifier of the cart item to update.
  //  * @param newQuantity - The new quantity to set for the cart item.
  //  */
  // @Mutation(() => Boolean)
  // async updateCart(
  //   @Args('cartItemId') cartItemId: string,
  //   @Args('newQuantity') newQuantity: number,
  // ): Promise<boolean> {
  //   await this.eCommerceService.updateCartItemQuantity(cartItemId, newQuantity);
  //   return true;
  // }

  // /**
  //  * Removes a product from the user's cart.
  //  * @param cartItemId - The unique identifier of the cart item to remove.
  //  */
  // @Mutation(() => Boolean)
  // async removeFromCart(
  //   @Args('cartItemId') cartItemId: string,
  // ): Promise<boolean> {
  //   await this.eCommerceService.removeCartItem(cartItemId);
  //   return true;
  // }

  // /**
  //  * Finalizes the user's order and processes payment.
  //  * @param userId - The unique identifier of the user checking out.
  //  * @returns A Payment model representing the transaction.
  //  */
  // @Mutation(() => Payment)
  // async checkout(@Args('userId') userId: string): Promise<Payment> {
  //   return this.eCommerceService.processCheckout(userId);
  // }

  // /**
  //  * Records a payment for an order.
  //  * @param orderId - The unique identifier of the order being paid for.
  //  * @param paymentMethod - The payment method used.
  //  * @param amount - The amount paid.
  //  * @returns A Payment model representing the completed payment.
  //  */
  // @Mutation(() => Payment)
  // async makePayment(
  //   @Args('orderId') orderId: string,
  //   @Args('paymentMethod') paymentMethod: string,
  //   @Args('amount') amount: number,
  // ): Promise<Payment> {
  //   return this.eCommerceService.recordPayment(orderId, paymentMethod, amount);
  // }
}
