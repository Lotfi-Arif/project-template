import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Payment } from '@app/prisma-generated/generated/nestgraphql/payment/payment.model';
import { PaymentCreateInput } from '@app/prisma-generated/generated/nestgraphql/payment/payment-create.input';
import { handlePrismaError } from '@app/common/utils';

@Injectable()
export class PaymentService {
  private readonly logger = new Logger(PaymentService.name);

  constructor(private prisma: PrismaService) {}

  /**
   * Records a new payment.
   * @param data - Payment data for creation.
   * @returns The recorded payment.
   */
  async createPayment(data: PaymentCreateInput): Promise<Payment> {
    this.logger.log('Attempting to record a new payment');
    try {
      return this.prisma.payment.create({ data });
    } catch (error) {
      this.logger.error('Failed to record payment', error.stack);
      handlePrismaError(error, 'Failed to record payment');
    }
  }

  /**
   * Retrieves a payment by its ID.
   * @param id - ID of the payment.
   * @returns The payment or null if not found.
   */
  async getPaymentById(id: string): Promise<Payment | null> {
    try {
      this.logger.log(`Retrieving payment by id: ${id}`);
      const payment = await this.prisma.payment.findUnique({ where: { id } });
      if (!payment) {
        this.logger.warn(`Payment with id ${id} not found`);
        throw new NotFoundException('Payment not found');
      }
      return payment;
    } catch (error) {
      this.logger.error(
        `Failed to retrieve payment with id: ${id}`,
        error.stack,
      );
      handlePrismaError(error, `Failed to retrieve payment with id: ${id}`);
    }
  }

  /**
   * Retrieves all payments.
   * @returns Array of payment records.
   */
  async getAllPayments(): Promise<Payment[]> {
    try {
      this.logger.log('Retrieving all payments');
      return this.prisma.payment.findMany();
    } catch (error) {
      this.logger.error('Failed to retrieve payments', error.stack);
      handlePrismaError(error, 'Failed to retrieve payments');
    }
  }

  /**
   * Updates a payment by its ID.
   * @param id - ID of the payment.
   * @param data - New payment data.
   * @returns The updated payment.
   */
  async updatePaymentById(
    id: string,
    data: Partial<PaymentCreateInput>,
  ): Promise<Payment> {
    try {
      this.logger.log(`Updating payment with id: ${id}`);
      const payment = await this.prisma.payment.update({ where: { id }, data });
      if (!payment) {
        this.logger.warn(`Payment with id ${id} not found`);
        throw new NotFoundException('Payment not found');
      }
      return payment;
    } catch (error) {
      this.logger.error(`Failed to update payment with id: ${id}`, error.stack);
      handlePrismaError(error, `Failed to update payment with id: ${id}`);
    }
  }

  /**
   * Deletes a payment by its ID.
   * @param id - ID of the payment.
   * @returns The deleted payment.
   */
  async deletePaymentById(id: string): Promise<Payment> {
    try {
      this.logger.log(`Deleting payment with id: ${id}`);
      const payment = await this.prisma.payment.delete({ where: { id } });
      if (!payment) {
        this.logger.warn(`Payment with id ${id} not found`);
        throw new NotFoundException('Payment not found');
      }
      return payment;
    } catch (error) {
      this.logger.error(`Failed to delete payment with id: ${id}`, error.stack);
      handlePrismaError(error, `Failed to delete payment with id: ${id}`);
    }
  }
}
