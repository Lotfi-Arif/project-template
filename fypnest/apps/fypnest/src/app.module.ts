import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import {ProvidersModule} from '@app/providers';
import { GraphQLModule } from '@nestjs/graphql';
import {join} from 'path'

@Module({
  imports: [PrismaModule, UsersModule,ProvidersModule,
    GraphQLModule.forRoot({
      cors: false,
      //TODO: This is for the authentication later when needed.
      // context: ({ req, connection }) => {
      //   if (connection?.context) {
      //     return { req: { headers: connection.context } };
      //   }
      //   return { req };
      // },

      autoSchemaFile: join(process.cwd(), '../graphql/fypnest.gql'),
      
      include: [ UsersModule ],
  })],
  controllers: [UsersController],
  providers: [PrismaService,UsersService],
  exports: [PrismaService]
})
export class AppModule {}
