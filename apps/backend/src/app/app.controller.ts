import { Controller, Get } from '@nestjs/common';

import { AppService, Data } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(): Data {
    return this.appService.getData();
  }
}
