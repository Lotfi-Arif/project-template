import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ReviewService } from './review.service';
import { Review } from '@app/prisma-generated/generated/nestgraphql/review/review.model';
import { Logger, NotFoundException } from '@nestjs/common';
import { ReviewUpdateInput } from '@app/prisma-generated/generated/nestgraphql/review/review-update.input';
import { ReviewCreateInput } from '@app/prisma-generated/generated/nestgraphql/review/review-create.input';

@Resolver(() => Review)
export class ReviewResolver {
  private readonly logger = new Logger(ReviewResolver.name);

  constructor(private readonly reviewService: ReviewService) {}

  @Query(() => [Review])
  async reviews(@Args('skip') skip?: number, @Args('take') take?: number) {
    this.logger.log(`Fetching reviews with skip: ${skip}, take: ${take}`);
    return this.reviewService.getAllReviews({ skip, take });
  }

  @Query(() => Review, { nullable: true })
  async review(@Args('id') id: string) {
    this.logger.log(`Fetching review with ID: ${id}`);
    const review = await this.reviewService.getReviewById(id);
    if (!review) {
      throw new NotFoundException(`Review with ID ${id} not found`);
    }
    return review;
  }

  @Mutation(() => Review)
  async createReview(@Args('data') data: ReviewCreateInput) {
    this.logger.log('Creating a new review');
    return this.reviewService.createReview(data);
  }

  @Mutation(() => Review)
  async updateReview(
    @Args('id') id: string,
    @Args('data') data: ReviewUpdateInput,
  ) {
    this.logger.log(`Updating review with ID: ${id}`);
    return this.reviewService.updateReview({ id, data });
  }

  @Mutation(() => Review)
  async deleteReview(@Args('id') id: string) {
    this.logger.log(`Deleting review with ID: ${id}`);
    return this.reviewService.deleteReview(id);
  }
}
