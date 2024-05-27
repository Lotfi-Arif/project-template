import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/user.service';
import { PrismaModule, PrismaService } from 'nestjs-prisma';

@Module({
  imports: [
    UserModule,
    PrismaModule.forRoot({
      isGlobal: true,
    }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, UserService, PrismaService],
})
export class AppModule {}
