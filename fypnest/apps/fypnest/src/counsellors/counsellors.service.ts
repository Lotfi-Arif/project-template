import { Injectable } from '@nestjs/common';
import { CreateCounsellorDto } from './dto/create-counsellor.dto';
import { UpdateCounsellorDto } from './dto/update-counsellor.dto';

@Injectable()
export class CounsellorsService {
  create(createCounsellorDto: CreateCounsellorDto) {
    return 'This action adds a new counsellor';
  }

  findAll() {
    return `This action returns all counsellors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} counsellor`;
  }

  update(id: number, updateCounsellorDto: UpdateCounsellorDto) {
    return `This action updates a #${id} counsellor`;
  }

  remove(id: number) {
    return `This action removes a #${id} counsellor`;
  }
}
