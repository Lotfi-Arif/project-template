import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { ProvidersModule } from '@app/providers';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaModule } from 'nestjs-prisma';
import { ChatModule } from './chat/chat.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import config from '@app/common/configs/config';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { MediaModule } from './media/media.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
import { GqlConfigService } from './graphql/gql-config-service';
import { TestingModule } from '@nestjs/testing';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    UserModule,
    ProvidersModule,
    EventEmitterModule.forRoot({
      wildcard: true,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useClass: GqlConfigService,
    }),
    PrismaModule.forRoot({
      isGlobal: true,
    }),
    ChatModule,
    AuthModule,
    PrismaModule,
    TestingModule,
    MediaModule,
    OrderModule,
    ProductModule,
    ReviewModule,
  ],
  providers: [PrismaService, UserService],
  exports: [PrismaService],
})
export class AppModule {}
