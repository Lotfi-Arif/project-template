import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Payment } from '@app/prisma-generated/generated/nestgraphql/payment/payment.model';
import { handlePrismaError } from '@app/common/utils';
import { Prisma } from '@prisma/client';

@Injectable()
export class PaymentService {
  private readonly logger = new Logger(PaymentService.name);

  constructor(private prisma: PrismaService) {}

  /**
   * Records a new payment.
   * @param paymentCreateArgs - Arguments for creating a payment.
   * @returns The recorded payment.
   */
  async createPayment(
    paymentCreateArgs: Prisma.PaymentCreateArgs,
  ): Promise<Payment> {
    this.logger.log('Attempting to record a new payment');
    try {
      return await this.prisma.payment.create(paymentCreateArgs);
    } catch (error) {
      this.logger.error('Failed to record payment', {
        error,
        paymentCreateArgs,
      });
      handlePrismaError(error, 'Failed to record payment');
    }
  }

  /**
   * Retrieves a payment by its ID.
   * @param id - ID of the payment.
   * @returns The payment or null if not found.
   */
  async getPaymentById(id: string): Promise<Payment | null> {
    this.logger.log(`Retrieving payment by id: ${id}`);
    try {
      const payment = await this.prisma.payment.findUnique({ where: { id } });
      if (!payment) {
        this.logger.warn(`Payment with id ${id} not found`);
        throw new NotFoundException('Payment not found');
      }
      return payment;
    } catch (error) {
      this.logger.error(`Failed to retrieve payment with id: ${id}`, { error });
      handlePrismaError(error, `Failed to retrieve payment with id: ${id}`);
    }
  }

  /**
   * Retrieves all payments.
   * @returns Array of payment records.
   */
  async getAllPayments(): Promise<Payment[]> {
    this.logger.log('Retrieving all payments');
    try {
      return await this.prisma.payment.findMany();
    } catch (error) {
      this.logger.error('Failed to retrieve payments', { error });
      handlePrismaError(error, 'Failed to retrieve payments');
    }
  }

  /**
   * Updates a payment by its ID.
   * @param paymentUpdateArgs - Arguments for updating a payment.
   * @returns The updated payment.
   */
  async updatePayment(
    paymentUpdateArgs: Prisma.PaymentUpdateArgs,
  ): Promise<Payment> {
    const paymentId = paymentUpdateArgs.where.id;
    this.logger.log(`Updating payment with id: ${paymentId}`);
    try {
      return await this.prisma.$transaction(async (prisma) => {
        const existingPayment = await prisma.payment.findUnique({
          where: { id: paymentId },
        });
        if (!existingPayment) {
          this.logger.warn(`Payment with id ${paymentId} not found for update`);
          handlePrismaError(
            { code: 'P2025' },
            `Payment with ID ${paymentId} not found`,
          );
        }
        return await prisma.payment.update(paymentUpdateArgs);
      });
    } catch (error) {
      this.logger.error(`Failed to update payment with id: ${paymentId}`, {
        error,
      });
      handlePrismaError(
        error,
        `Failed to update payment with id: ${paymentId}`,
      );
    }
  }

  /**
   * Deletes a payment by its ID.
   * @param id - ID of the payment.
   * @returns The deleted payment.
   */
  async deletePaymentById(id: string): Promise<Payment> {
    this.logger.log(`Deleting payment with id: ${id}`);
    try {
      return await this.prisma.$transaction(async (prisma) => {
        const existingPayment = await prisma.payment.findUnique({
          where: { id },
        });
        if (!existingPayment) {
          this.logger.warn(`Payment with id ${id} not found for deletion`);
          handlePrismaError(
            { code: 'P2025' },
            `Payment with ID ${id} not found`,
          );
        }
        return await prisma.payment.delete({ where: { id } });
      });
    } catch (error) {
      this.logger.error(`Failed to delete payment with id: ${id}`, { error });
      handlePrismaError(error, `Failed to delete payment with id: ${id}`);
    }
  }
}
