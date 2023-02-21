import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { PasswordService } from '../users/password.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { SecurityConfig } from '@app/common/configs/config.interface';
import { GqlAuthGuard } from './guards/graph-auth.guard';
import { JwtStrategy } from './jwt.strategy';

@Module({
  providers: [
    AuthService,
    AuthResolver,
    JwtStrategy,
    PasswordService,
    GqlAuthGuard,
  ],
  exports: [GqlAuthGuard],
  imports: [
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => {
        const securityConfig = configService.get<SecurityConfig>('security');
        return {
          secret: configService.get<string>('JWT_ACCESS_SECRET'),
          signOptions: {
            expiresIn: securityConfig.expiresIn,
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class AuthModule {}
