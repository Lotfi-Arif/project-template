import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { ProvidersModule } from '@app/providers';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaModule } from 'nestjs-prisma';
import { join } from 'path';
import { PostsModule } from './posts/posts.module';
import { MessagesModule } from './messages/messages.module';
import { ChatsModule } from './chats/chats.module';
import { EventsModule } from './events/events.module';
import { FaqModule } from './faq/faq.module';
import { AssetsModule } from './assets/assets.module';
import { SchedulesModule } from './schedules/schedules.module';
import { CounselorSessionsModule } from './counselor-sessions/counselor-sessions.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import config from '@app/common/configs/config';
import { ApolloDriver } from '@nestjs/apollo';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { CounselorModule } from './counselor/counselor.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    UsersModule,
    ProvidersModule,
    PostsModule,
    EventEmitterModule.forRoot({
      wildcard: true,
    }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      cors: false,
      installSubscriptionHandlers: true,
      autoSchemaFile: join(process.cwd(), './graphql/fypnest.gql'),
      include: [
        UsersModule,
        PostsModule,
        AuthModule,
        EventsModule,
        ChatsModule,
        CounselorSessionsModule,
        MessagesModule,
        FaqModule,
        SchedulesModule,
        CounselorModule
      ],
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
    CounselorSessionsModule,
    AuthModule,
    CounselorModule,
  ],
  providers: [PrismaService, UsersService],
  exports: [PrismaService],
})
export class AppModule {}
