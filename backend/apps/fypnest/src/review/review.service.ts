import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Review } from '@app/prisma-generated/generated/nestgraphql/review/review.model';
import { ReviewCreateInput } from '@app/prisma-generated/generated/nestgraphql/review/review-create.input';
import { Prisma } from '@prisma/client';
import { handlePrismaError } from '@app/common/utils';

@Injectable()
export class ReviewService {
  private readonly logger = new Logger(ReviewService.name);

  constructor(private readonly prisma: PrismaService) {}

  /**
   * Create a new review.
   * @param data - Data to create the review with.
   * @returns The created review.
   */
  async createReview(data: ReviewCreateInput): Promise<Review> {
    try {
      this.logger.log('Creating a new review');
      return this.prisma.review.create({ data });
    } catch (error) {
      this.logger.error('Failed to create review', error.stack);
      handlePrismaError(error, 'Failed to create review');
    }
  }

  /**
   * Retrieve all reviews.
   * @param params - Optional pagination parameters.
   * @returns List of reviews.
   */
  async getAllReviews(
    params: { skip?: number; take?: number } = {},
  ): Promise<Review[]> {
    try {
      const { skip, take } = params;
      this.logger.log(
        `Fetching reviews with pagination - skip: ${skip}, take: ${take}`,
      );
      return this.prisma.review.findMany({ skip, take });
    } catch (error) {
      this.logger.error('Failed to retrieve reviews', error.stack);
      handlePrismaError(error, 'Failed to retrieve reviews');
    }
  }

  /**
   * Retrieve a review by its ID.
   * @param id - Review ID.
   * @returns The review or null if not found.
   */
  async getReviewById(id: string): Promise<Review | null> {
    try {
      this.logger.log(`Fetching review by id: ${id}`);
      const review = await this.prisma.review.findUnique({ where: { id } });
      if (!review) {
        throw new NotFoundException(`Review with ID ${id} not found`);
      }
      return review;
    } catch (error) {
      this.logger.error(`Failed to retrieve review with ID ${id}`, error.stack);
      handlePrismaError(error, `Failed to retrieve review with ID ${id}`);
    }
  }

  /**
   * Update a review by its ID.
   * @param params - Update parameters.
   * @returns The updated review.
   */
  async updateReview(params: {
    id: string;
    data: Prisma.ReviewUpdateInput;
  }): Promise<Review> {
    try {
      const { id, data } = params;
      this.logger.log(`Updating review with id: ${id}`);
      return this.prisma.review.update({ where: { id }, data });
    } catch (error) {
      this.logger.error(
        `Failed to update review with ID ${params.id}`,
        error.stack,
      );
      handlePrismaError(error, `Failed to update review with ID ${params.id}`);
    }
  }

  /**
   * Delete a review by its ID.
   * @param id - Review ID.
   * @returns The deleted review.
   */
  async deleteReview(id: string): Promise<Review> {
    try {
      this.logger.log(`Deleting review with id: ${id}`);
      return this.prisma.review.delete({ where: { id } });
    } catch (error) {
      this.logger.error(`Failed to delete review with ID ${id}`, error.stack);
      handlePrismaError(error, `Failed to delete review with ID ${id}`);
    }
  }
}
