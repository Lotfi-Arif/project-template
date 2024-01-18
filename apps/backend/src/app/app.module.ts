import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../user/user.module';
import { PrismaService } from '../prisma/prisma.service';
import { UserService } from '../user/user.service';
import { PrismaModule } from '../prisma/prisma.module';
import { OrderModule } from '../order/order.module';
import { OrderService } from '../order/order.service';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';

@Module({
  imports: [
    UserModule,
    PrismaModule,
    OrderModule,
    AuthModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    UserService,
    OrderService,
    AuthService,
    PrismaService,
  ],
})
export class AppModule {}
