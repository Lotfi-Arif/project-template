import { Schedule } from '@app/common/generated/index/schedule/schedule.model';
import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ScheduleService } from './schedule.service';
import { PrismaSelect } from '@paljs/plugins';
import console from 'console';
import { FindManyScheduleArgs } from '@app/common/generated/index/schedule/find-many-schedule.args';
import { FindUniqueScheduleArgs } from '@app/common/generated/index/schedule/find-unique-schedule.args';
import { CreateOneScheduleArgs } from '@app/common/generated/index/schedule/create-one-schedule.args';
import { UpdateOneScheduleArgs } from '@app/common/generated/index/schedule/update-one-schedule.args';
import { DeleteOneScheduleArgs } from '@app/common/generated/index/schedule/delete-one-schedule.args';
@Resolver()
export class ScheduleResolver {
    constructor(private readonly scheduleService: ScheduleService) {}
    @Query(() => [Schedule])
    async findAllSchedule(
      @Args() scheduleFindManyArgs: FindManyScheduleArgs,
      @Info() info,
    ) {
      try {
        const schedule = new PrismaSelect(info).value;
        return this.scheduleService.findAll({ ...scheduleFindManyArgs, ...schedule });
      } catch (error) {
        console.error(error);
      }
    }
  
    @Mutation(() => Schedule)
    async findOneSchedule(
      @Args() scheduleFindUnique: FindUniqueScheduleArgs,
      @Info() info,
    ) {
      try {
        const schedule = new PrismaSelect(info).value;
        return this.scheduleService.findOne({ ...scheduleFindUnique, ...schedule });
      } catch (error) {
        console.error(error);
      }
    }
  
    @Mutation(() => Schedule)
    async createSchedule(@Args() scheduleCreateArgs: CreateOneScheduleArgs, @Info() info) {
      try {
        const newSchedule = new PrismaSelect(info).value;
        return this.scheduleService.createSchedule({
          ...scheduleCreateArgs,
          ...newSchedule,
        });
      } catch (error) {
        console.error(error);
      }
    }
  
    @Mutation(() => Schedule)
    async updateSchedule(@Args() scheduleUpdateArgs: UpdateOneScheduleArgs, @Info() info) {
      try {
        const update = new PrismaSelect(info).value;
        return this.scheduleService.updateSchedule({ ...scheduleUpdateArgs, ...update });
      } catch (error) {
        console.error(error);
      }
    }
  
    @Mutation(() => Schedule)
    async deleteSchedule(@Args() scheduleDeleteArgs: DeleteOneScheduleArgs, @Info() info) {
      try {
        const schedule = new PrismaSelect(info).value;
        return this.scheduleService.deleteSchedule({ ...scheduleDeleteArgs, ...schedule });
      } catch (error) {
        console.error(error);
      }
    }
}
