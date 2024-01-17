import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [OrderController],
  providers: [OrderService],
  imports: [PrismaModule],
})
export class OrderModule {}
