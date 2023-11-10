import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ReviewService } from './review.service';
import { Review } from '@app/prisma-generated/generated/nestgraphql/review/review.model';
import { Logger, NotFoundException } from '@nestjs/common';
import { handleHttpError } from '@app/common/utils';
import { UpdateOneReviewArgs } from '@app/prisma-generated/generated/nestgraphql/review/update-one-review.args';
import { CreateOneReviewArgs } from '@app/prisma-generated/generated/nestgraphql/review/create-one-review.args';

@Resolver(() => Review)
export class ReviewResolver {
  private readonly logger = new Logger(ReviewResolver.name);

  constructor(private readonly reviewService: ReviewService) {}

  @Query(() => [Review])
  async reviews(@Args('skip') skip?: number, @Args('take') take?: number) {
    try {
      this.logger.log(`Fetching reviews with skip: ${skip}, take: ${take}`);
      return this.reviewService.getAllReviews({ skip, take });
    } catch (error) {
      this.logger.error('Failed to retrieve reviews', { error });
      throw handleHttpError(error, 'Failed to retrieve reviews');
    }
  }

  @Query(() => Review, { nullable: true })
  async review(@Args('id') id: string) {
    try {
      this.logger.log(`Fetching review with ID: ${id}`);
      const review = await this.reviewService.getReviewById(id);
      if (!review) {
        throw new NotFoundException(`Review with ID ${id} not found`);
      }
      return review;
    } catch (error) {
      this.logger.error(`Failed to retrieve review with ID: ${id}`, { error });
      throw handleHttpError(error, 'Failed to retrieve review');
    }
  }

  @Mutation(() => Review)
  async createReview(@Args('data') data: CreateOneReviewArgs) {
    try {
      this.logger.log('Creating a new review');
      return this.reviewService.createReview(data);
    } catch (error) {
      this.logger.error('Failed to create a new review', { error });
      throw handleHttpError(error, 'Failed to create a new review');
    }
  }

  @Mutation(() => Review)
  async updateReview(
    @Args('id') id: string,
    @Args('data') data: UpdateOneReviewArgs,
  ) {
    try {
      this.logger.log(`Updating review with ID: ${id}`);
      return this.reviewService.updateReview({ id, reviewUpdateArgs: data });
    } catch (error) {
      this.logger.error(`Failed to update review with ID: ${id}`, { error });
      throw handleHttpError(error, 'Failed to update review');
    }
  }

  @Mutation(() => Review)
  async deleteReview(@Args('id') id: string) {
    try {
      this.logger.log(`Deleting review with ID: ${id}`);
      return this.reviewService.deleteReview(id);
    } catch (error) {
      this.logger.error(`Failed to delete review with ID: ${id}`, { error });
      throw handleHttpError(error, 'Failed to delete review');
    }
  }
}
