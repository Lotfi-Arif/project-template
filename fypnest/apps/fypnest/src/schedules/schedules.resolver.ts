import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { Schedule } from '@app/common/generated/index/schedule/schedule.model';
import { SchedulesService } from './schedules.service';
import { FindManyScheduleArgs } from '@app/common/generated/index/schedule/find-many-schedule.args';
import { CreateOneScheduleArgs } from '@app/common/generated/index/schedule/create-one-schedule.args';
import { DeleteOneScheduleArgs } from '@app/common/generated/index/schedule/delete-one-schedule.args';
import { UpdateOneScheduleArgs } from '@app/common/generated/index/schedule/update-one-schedule.args';
import { FindUniqueScheduleArgs } from '@app/common/generated/index/schedule/find-unique-schedule.args';


@Resolver(() => Schedule)
export class SchedulesResolver {
  constructor(private readonly schedulesService: SchedulesService) {}

  @Query(() => [Schedule])
  async findAllSchedules(
    @Args() scheduleFindManyArgs: FindManyScheduleArgs,
    @Info() info,
  ) {
    try {
      const schedules = new PrismaSelect(info).value;
      return this.schedulesService.findAll({
        ...scheduleFindManyArgs,
        ...schedules,
      });
    } catch (error) {
      console.error(error);
    }
  }

  @Query(() => Schedule)
  async findOneSchedule(
    @Args() scheduleFindUnique: FindUniqueScheduleArgs,
    @Info() info,
  ) {
    try {
      const schedule = new PrismaSelect(info).value;
      return this.schedulesService.findOne({
        ...scheduleFindUnique,
        ...schedule,
      });
    } catch (error) {
      console.error(error);
    }
  }

  @Mutation(() => Schedule)
  async createSchedule(
    @Args() scheduleCreateArgs: CreateOneScheduleArgs,
    @Info() info,
  ) {
    try {
      const newSchedule = new PrismaSelect(info).value;
      return this.schedulesService.createSchedule({
        ...scheduleCreateArgs,
        ...newSchedule,
      });
    } catch (error) {
      console.error(error);
    }
  }

  @Mutation(() => Schedule)
  async updateSchedule(
    @Args() scheduleUpdateArgs: UpdateOneScheduleArgs,
    @Info() info,
  ) {
    try {
      const update = new PrismaSelect(info).value;
      return this.schedulesService.updateSchedule({
        ...scheduleUpdateArgs,
        ...update,
      });
    } catch (error) {
      console.error(error);
    }
  }

  @Mutation(() => Schedule)
  async deleteSchedule(
    @Args() scheduleDeletArgs: DeleteOneScheduleArgs,
    @Info() info,
  ) {
    try {
      const schedule = new PrismaSelect(info).value;
      return this.schedulesService.deleteSchedule({
        ...scheduleDeletArgs,
        ...schedule,
      });
    } catch (error) {
      console.error(error);
    }
  }
}
