import { PartialType } from '@nestjs/mapped-types';
import { CreateCounselorDto } from './create-counselor.dto';

export class UpdateCounselorDto extends PartialType(CreateCounselorDto) {}
