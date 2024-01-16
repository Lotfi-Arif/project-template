import { Injectable } from '@nestjs/common';
import { z } from 'zod';

const dataschema = z.object({
  message: z.string(),
});
export interface Data extends z.infer<typeof dataschema> {}

@Injectable()
export class AppService {
  getData(): Data {
    return { message: 'Hello API' };
  }
}
