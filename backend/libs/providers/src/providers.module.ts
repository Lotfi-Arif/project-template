import { Module, Global } from '@nestjs/common';
import { TwilioModule } from './twilio/twilio.module';

@Global()
@Module({
  exports: [TwilioModule],
  imports: [TwilioModule],
})
export class ProvidersModule {}
