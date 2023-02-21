import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { Event } from '@app/common/generated/index/event/event.model';
import { EventsService } from './events.service';
import { FindManyEventArgs } from '@app/common/generated/index/event/find-many-event.args';
import { CreateOneEventArgs } from '@app/common/generated/index/event/create-one-event.args';
import { DeleteOneEventArgs } from '@app/common/generated/index/event/delete-one-event.args';
import { UpdateOneEventArgs } from '@app/common/generated/index/event/update-one-event.args';
import { FindUniqueEventArgs } from '@app/common/generated/index/event/find-unique-event.args';

@Resolver(() => Event)
export class EventsResolver {
  constructor(private readonly eventsService: EventsService) {}

  @Query(() => [Event])
  async findAllEvents(
    @Args() eventFindManyArgs: FindManyEventArgs,
    @Info() info,
  ) {
    try {
      const events = new PrismaSelect(info).value;
      return this.eventsService.findAll({ ...eventFindManyArgs, ...events });
    } catch (error) {
      console.error(error);
    }
  }

  @Query(() => Event)
  async findOneEvent(
    @Args('id') id: string, @Info() info 
  ) {
    try {
      const event = new PrismaSelect(info).value;
      return this.eventsService.findOne({ where: {id: id}, ...event });
    } catch (error) {
      console.error(error);
    }
  }

  @Mutation(() => Event)
  async createEvent(@Args() eventCreateArgs: CreateOneEventArgs, @Info() info) {
    try {
      const newEvent = new PrismaSelect(info).value;
      return this.eventsService.createEvent({
        ...eventCreateArgs,
        ...newEvent,
      });
    } catch (error) {
      console.error(error);
    }
  }

  @Mutation(() => Event)
  async updateEvent(@Args() eventUpdateArgs: UpdateOneEventArgs, @Info() info) {
    try {
      const update = new PrismaSelect(info).value;
      return this.eventsService.updateEvent({ ...eventUpdateArgs, ...update });
    } catch (error) {
      console.error(error);
    }
  }

  @Mutation(() => Event)
  async deleteEvent(@Args() eventDeletArgs: DeleteOneEventArgs, @Info() info) {
    try {
      const event = new PrismaSelect(info).value;
      return this.eventsService.deleteEvent({ ...eventDeletArgs, ...event });
    } catch (error) {
      console.error(error);
    }
  }
}
