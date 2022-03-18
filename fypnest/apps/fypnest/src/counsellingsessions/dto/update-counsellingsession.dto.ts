import { PartialType } from '@nestjs/mapped-types';
import { CreateCounsellingsessionDto } from './create-counsellingsession.dto';

export class UpdateCounsellingsessionDto extends PartialType(CreateCounsellingsessionDto) {}
