import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ReviewService } from './review.service';
import { ReviewResolver } from './review.resolver';

@Module({
  providers: [ReviewService, ReviewResolver, PrismaService],
})
export class ReviewModule {}
