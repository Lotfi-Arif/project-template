import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PaymentService } from './payment.service';
import { Payment } from '@app/prisma-generated/generated/nestgraphql/payment/payment.model';
import { Logger, NotFoundException } from '@nestjs/common';
import { PaymentCreateInput } from '@app/prisma-generated/generated/nestgraphql/payment/payment-create.input';

@Resolver(() => Payment)
export class PaymentResolver {
  private readonly logger = new Logger(PaymentResolver.name);

  constructor(private readonly paymentService: PaymentService) {}

  @Query(() => Payment, { nullable: true })
  async payment(@Args('id') id: string): Promise<Payment> {
    this.logger.log(`Retrieving payment with ID: ${id}`);
    const payment = await this.paymentService.getPaymentById(id);
    if (!payment) throw new NotFoundException('Payment not found');
    return payment;
  }

  @Query(() => [Payment])
  async payments(): Promise<Payment[]> {
    this.logger.log('Retrieving all payments');
    return await this.paymentService.getAllPayments();
  }

  @Mutation(() => Payment)
  async createPayment(
    @Args('data') data: PaymentCreateInput,
  ): Promise<Payment> {
    this.logger.log('Recording a new payment');
    return await this.paymentService.createPayment(data);
  }

  @Mutation(() => Payment)
  async updatePayment(
    @Args('id') id: string,
    @Args('data') data: PaymentCreateInput,
  ): Promise<Payment> {
    this.logger.log(`Updating payment with ID: ${id}`);
    const payment = await this.paymentService.updatePaymentById(id, data);
    if (!payment) throw new NotFoundException('Payment not found');
    return payment;
  }

  @Mutation(() => Payment)
  async deletePayment(@Args('id') id: string): Promise<Payment> {
    this.logger.log(`Deleting payment with ID: ${id}`);
    const payment = await this.paymentService.deletePaymentById(id);
    if (!payment) throw new NotFoundException('Payment not found');
    return payment;
  }
}
