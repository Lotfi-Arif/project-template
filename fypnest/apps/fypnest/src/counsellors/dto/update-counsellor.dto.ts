import { PartialType } from '@nestjs/mapped-types';
import { CreateCounsellorDto } from './create-counsellor.dto';

export class UpdateCounsellorDto extends PartialType(CreateCounsellorDto) {}
