import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { CounselorSession } from '@app/common/generated/index/counselor-session/counselor-session.model';
import { CounselorSessionsService } from './counselor-sessions.service';
import { CreateOneCounselorSessionArgs } from '@app/common/generated/index/counselor-session/create-one-counselor-session.args';
import { DeleteOneCounselorSessionArgs } from '@app/common/generated/index/counselor-session/delete-one-counselor-session.args';
import { FindManyCounselorSessionArgs } from '@app/common/generated/index/counselor-session/find-many-counselor-session.args';
import { FindUniqueCounselorSessionArgs } from '@app/common/generated/index/counselor-session/find-unique-counselor-session.args';
import { UpdateOneCounselorSessionArgs } from '@app/common/generated/index/counselor-session/update-one-counselor-session.args';
import { CreateCounselorSessionArguments } from './counselor-session.dto';

@Resolver(() => CounselorSession)
export class CounselorSessionsResolver {
  constructor(
    private readonly counselorSessionsService: CounselorSessionsService,
  ) {}

  @Query(() => [CounselorSession])
  async findAllCounselorSessions(
    @Args() counselorSessionFindManyArgs: FindManyCounselorSessionArgs,
    @Info() info,
  ) {
    try {
      const counselorSessions = new PrismaSelect(info).value;
      return this.counselorSessionsService.findAll({
        ...counselorSessionFindManyArgs,
        ...counselorSessions,
      });
    } catch (error) {
      console.error(error);
    }
  }

  @Mutation(() => CounselorSession)
  async findOneCounselorSession(
    @Args() counselorSessionFindUnique: FindUniqueCounselorSessionArgs,
    @Info() info,
  ) {
    try {
      const counselorSession = new PrismaSelect(info).value;
      return this.counselorSessionsService.findOne({
        ...counselorSessionFindUnique,
        ...counselorSession,
      });
    } catch (error) {
      console.error(error);
    }
  }

  @Mutation(() => CounselorSession)
  async createCounselorSession(
    @Args() counselorSessionCreateArgs: CreateCounselorSessionArguments,
    @Info() info,
  ) {
    try {
      const newCounselorSession = new PrismaSelect(info).value;
      return this.counselorSessionsService.createCounselorSession({
        ...counselorSessionCreateArgs,
        ...newCounselorSession,
        data:{
          ...counselorSessionCreateArgs.data,
          timeFrom: this.convertEpochTime(counselorSessionCreateArgs.data.timeFrom),
          timeTo: this.convertEpochTime(counselorSessionCreateArgs.data.timeTo),
          counsellingDate: this.convertEpochTime(counselorSessionCreateArgs.data.counsellingDate)
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  @Mutation(() => CounselorSession)
  async updateCounselorSession(
    @Args() counselorSessionUpdateArgs: UpdateOneCounselorSessionArgs,
    @Info() info,
  ) {
    try {
      const update = new PrismaSelect(info).value;
      return this.counselorSessionsService.updateCounselorSession({
        ...counselorSessionUpdateArgs,
        ...update,
      });
    } catch (error) {
      console.error(error);
    }
  }

  @Mutation(() => CounselorSession)
  async deleteCounselorSession(
    @Args() counselorSessionDeletArgs: DeleteOneCounselorSessionArgs,
    @Info() info,
  ) {
    try {
      const counselorSession = new PrismaSelect(info).value;
      return this.counselorSessionsService.deleteCounselorSession({
        ...counselorSessionDeletArgs,
        ...counselorSession,
      });
    } catch (error) {
      console.error(error);
    }
  }

  convertEpochTime(epochDate: number) {
    const newDate = new Date(epochDate).toISOString();
    return newDate;
  }
}
