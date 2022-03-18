import { Injectable } from '@nestjs/common';
import { CreateCounsellingsessionDto } from './dto/create-counsellingsession.dto';
import { UpdateCounsellingsessionDto } from './dto/update-counsellingsession.dto';

@Injectable()
export class CounsellingsessionsService {
  create(createCounsellingsessionDto: CreateCounsellingsessionDto) {
    return 'This action adds a new counsellingsession';
  }

  findAll() {
    return `This action returns all counsellingsessions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} counsellingsession`;
  }

  update(id: number, updateCounsellingsessionDto: UpdateCounsellingsessionDto) {
    return `This action updates a #${id} counsellingsession`;
  }

  remove(id: number) {
    return `This action removes a #${id} counsellingsession`;
  }
}
