import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Review } from '@app/prisma-generated/generated/nestgraphql/review/review.model';
import { ReviewCreateInput } from '@app/prisma-generated/generated/nestgraphql/review/review-create.input';
import { ReviewUpdateInput } from '@app/prisma-generated/generated/nestgraphql/review/review-update.input';

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
    this.logger.log('Creating a new review');
    return this.prisma.review.create({ data });
  }

  /**
   * Retrieve all reviews.
   * @param params - Optional pagination parameters.
   * @returns List of reviews.
   */
  async getAllReviews(
    params: { skip?: number; take?: number } = {},
  ): Promise<Review[]> {
    const { skip, take } = params;
    this.logger.log(
      `Fetching reviews with pagination - skip: ${skip}, take: ${take}`,
    );
    return this.prisma.review.findMany({ skip, take });
  }

  /**
   * Retrieve a review by its ID.
   * @param id - Review ID.
   * @returns The review or null if not found.
   */
  async getReviewById(id: string): Promise<Review | null> {
    this.logger.log(`Fetching review by id: ${id}`);
    const review = await this.prisma.review.findUnique({ where: { id } });
    if (!review) {
      throw new NotFoundException(`Review with ID ${id} not found`);
    }
    return review;
  }

  /**
   * Update a review by its ID.
   * @param params - Update parameters.
   * @returns The updated review.
   */
  async updateReview(params: {
    id: string;
    data: ReviewUpdateInput;
  }): Promise<Review> {
    const { id, data } = params;
    this.logger.log(`Updating review with id: ${id}`);
    return this.prisma.review.update({ where: { id }, data });
  }

  /**
   * Delete a review by its ID.
   * @param id - Review ID.
   * @returns The deleted review.
   */
  async deleteReview(id: string): Promise<Review> {
    this.logger.log(`Deleting review with id: ${id}`);
    return this.prisma.review.delete({ where: { id } });
  }
}
