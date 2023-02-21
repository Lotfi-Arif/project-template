import { Module , Global} from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { TwilioModule } from './twilio/twilio.module';


@Global()
@Module({
  exports: [PrismaModule,TwilioModule],
  imports:[PrismaModule, TwilioModule],
})
export class ProvidersModule {}
