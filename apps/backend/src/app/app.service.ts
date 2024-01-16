import { Injectable } from '@nestjs/common';

export type Data = {
  message: string;
};

@Injectable()
export class AppService {
  getData(): Data {
    return { message: 'Hello API' };
  }
}
