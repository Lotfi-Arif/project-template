import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PaymentService } from './payment.service';
import { Payment } from '@app/prisma-generated/generated/nestgraphql/payment/payment.model';
import { Logger, NotFoundException } from '@nestjs/common';
import { PaymentCreateInput } from '@app/prisma-generated/generated/nestgraphql/payment/payment-create.input';
import { handleHttpError } from '@app/common/utils';

@Resolver(() => Payment)
export class PaymentResolver {
  private readonly logger = new Logger(PaymentResolver.name);

  constructor(private readonly paymentService: PaymentService) {}

  @Query(() => Payment, { nullable: true })
  async payment(@Args('id') id: string): Promise<Payment> {
    try {
      this.logger.log(`Retrieving payment with ID: ${id}`);
      const payment = await this.paymentService.getPaymentById(id);
      if (!payment) throw new NotFoundException('Payment not found');
      return payment;
    } catch (error) {
      this.logger.error(`Failed to retrieve payment with ID: ${id}`, { error });
      throw handleHttpError(error, 'Failed to retrieve payment');
    }
  }

  @Query(() => [Payment])
  async payments(): Promise<Payment[]> {
    try {
      this.logger.log('Retrieving all payments');
      return await this.paymentService.getAllPayments();
    } catch (error) {
      this.logger.error('Failed to retrieve payments', { error });
      throw handleHttpError(error, 'Failed to retrieve payments');
    }
  }

  @Mutation(() => Payment)
  async createPayment(
    @Args('data') data: PaymentCreateInput,
  ): Promise<Payment> {
    try {
      this.logger.log('Recording a new payment');
      return await this.paymentService.createPayment(data);
    } catch (error) {
      this.logger.error('Failed to record payment', { error });
      throw handleHttpError(error, 'Failed to record payment');
    }
  }

  @Mutation(() => Payment)
  async updatePayment(
    @Args('id') id: string,
    @Args('data') data: PaymentCreateInput,
  ): Promise<Payment> {
    try {
      this.logger.log(`Updating payment with ID: ${id}`);
      const payment = await this.paymentService.updatePaymentById(id, data);
      if (!payment) throw new NotFoundException('Payment not found');
      return payment;
    } catch (error) {
      this.logger.error(`Failed to update payment with ID: ${id}`, { error });
      throw handleHttpError(error, 'Failed to update payment');
    }
  }

  @Mutation(() => Payment)
  async deletePayment(@Args('id') id: string): Promise<Payment> {
    try {
      this.logger.log(`Deleting payment with ID: ${id}`);
      const payment = await this.paymentService.deletePaymentById(id);
      if (!payment) throw new NotFoundException('Payment not found');
      return payment;
    } catch (error) {
      this.logger.error(`Failed to delete payment with ID: ${id}`, { error });
      throw handleHttpError(error, 'Failed to delete payment');
    }
  }
}
