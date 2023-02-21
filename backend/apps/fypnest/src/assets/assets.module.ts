import { Module } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { AssetsResolver } from './assets.resolver';

@Module({
  providers: [AssetsService,AssetsResolver]
})
export class AssetsModule {}
