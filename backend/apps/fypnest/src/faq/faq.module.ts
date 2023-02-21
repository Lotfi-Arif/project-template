import { Module } from '@nestjs/common';
import { FAQsService } from './faq.service';
import { FaqsResolver } from './faq.resolver';

@Module({
  providers: [FAQsService, FaqsResolver]
})
export class FaqModule {}
