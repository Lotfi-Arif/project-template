import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../user/user.module';
import { PrismaService } from '../prisma/prisma.service';
import { UserService } from '../user/user.service';
import { PrismaModule } from '../prisma/prisma.module';
import { OrderModule } from '../order/order.module';
import { OrderService } from '../order/order.service';

@Module({
  imports: [UserModule, PrismaModule, OrderModule],
  controllers: [AppController],
  providers: [AppService, UserService, OrderService, PrismaService],
})
export class AppModule {}
