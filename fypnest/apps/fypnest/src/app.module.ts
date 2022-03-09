import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { ProvidersModule } from '@app/providers';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaModule } from 'nestjs-prisma'
import { join } from 'path'
import { PostsModule } from './posts/posts.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [UsersModule, ProvidersModule,
    GraphQLModule.forRoot({
      cors: false,
      autoSchemaFile: join(process.cwd(), '../graphql/fypnest.gql'),
      include: [UsersModule],
    }),
    PrismaModule.forRoot({
      isGlobal: true,
    }),
    PostsModule
  ],
  providers: [PrismaService, UsersService],
  exports: [PrismaService]
})
export class AppModule { }
