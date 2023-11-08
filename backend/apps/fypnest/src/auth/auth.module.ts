import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [
    ConfigModule, // If using @nestjs/config
    UserModule,
    PassportModule.register({ defaultStrategy: 'jwt' }), // Set up Passport
    JwtModule.registerAsync({
      imports: [ConfigModule], // If using @nestjs/config
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_ACCESS_TOKEN_SECRET'), // Access the secret from config
        signOptions: { expiresIn: '1h' },
      }),
      inject: [ConfigService], // Inject the ConfigService
    }),
  ],
  providers: [AuthService, AuthResolver, PrismaService],
  exports: [AuthService], // Export AuthService if it will be used outside of this module
})
export class AuthModule {}
