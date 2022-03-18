import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { ProvidersModule } from '@app/providers';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaModule } from 'nestjs-prisma'
import { join } from 'path'
import { PostsModule } from './posts/posts.module';
import { MessagesModule } from './messages/messages.module';
import { ChatsModule } from './chats/chats.module';
import { EventsModule } from './events/events.module';
import { FaqModule } from './faq/faq.module';
import { AssetsModule } from './assets/assets.module';
import { SchedulesModule } from './schedules/schedules.module';
import { CounsellingsessionsModule } from './counsellingsessions/counsellingsessions.module';
import { CounsellorsModule } from './counsellors/counsellors.module';

@Module({
  imports: [UsersModule, ProvidersModule, PostsModule,
    GraphQLModule.forRoot({
      cors: false,
      autoSchemaFile: join(process.cwd(), '../graphql/fypnest.gql'),
      include: [UsersModule, PostsModule],
    }),
    PrismaModule.forRoot({
      isGlobal: true,
    }),
    PostsModule,
    MessagesModule,
    ChatsModule,
    EventsModule,
    FaqModule,
    AssetsModule,
    SchedulesModule,
    CounsellingsessionsModule,
    CounsellorsModule
  ],
  providers: [PrismaService, UsersService],
  exports: [PrismaService]
})
export class AppModule { }
