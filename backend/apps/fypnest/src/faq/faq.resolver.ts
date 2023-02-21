import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { FAQ } from '@app/common/generated/index/faq/faq.model';
import { FAQsService } from './faq.service';
import { CreateOneFaqArgs } from '@app/common/generated/index/prisma/create-one-faq.args';
import { DeleteOneFaqArgs } from '@app/common/generated/index/prisma/delete-one-faq.args';
import { FindManyFaqArgs } from '@app/common/generated/index/prisma/find-many-faq.args';
import { FindUniqueFaqArgs } from '@app/common/generated/index/prisma/find-unique-faq.args';
import { UpdateOneFaqArgs } from '@app/common/generated/index/prisma/update-one-faq.args';

@Resolver(() => FAQ)
export class FaqsResolver {
  constructor(private readonly faqsService: FAQsService) {}

  @Query(() => [FAQ])
  async findAllFaqs(@Args() faqFindManyArgs: FindManyFaqArgs, @Info() info) {
    try {
      const faqs = new PrismaSelect(info).value;
      return this.faqsService.findAll({ ...faqFindManyArgs, ...faqs });
    } catch (error) {
      console.error(error);
    }
  }

  @Mutation(() => FAQ)
  async findOneFaq(@Args() faqFindUnique: FindUniqueFaqArgs, @Info() info) {
    try {
      const faq = new PrismaSelect(info).value;
      return this.faqsService.findOne({ ...faqFindUnique, ...faq });
    } catch (error) {
      console.error(error);
    }
  }

  @Mutation(() => FAQ)
  async createFaq(@Args() faqCreateArgs: CreateOneFaqArgs, @Info() info) {
    try {
      const newFaq = new PrismaSelect(info).value;
      return this.faqsService.createFAQ({ ...faqCreateArgs, ...newFaq });
    } catch (error) {
      console.error(error);
    }
  }

  @Mutation(() => FAQ)
  async updateFaq(@Args() faqUpdateArgs: UpdateOneFaqArgs, @Info() info) {
    try {
      const update = new PrismaSelect(info).value;
      return this.faqsService.updateFAQ({ ...faqUpdateArgs, ...update });
    } catch (error) {
      console.error(error);
    }
  }

  @Mutation(() => FAQ)
  async deleteFaq(@Args() faqDeletArgs: DeleteOneFaqArgs, @Info() info) {
    try {
      const faq = new PrismaSelect(info).value;
      return this.faqsService.deleteFAQ({ ...faqDeletArgs, ...faq });
    } catch (error) {
      console.error(error);
    }
  }
}
