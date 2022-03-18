import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CounsellingsessionsService } from './counsellingsessions.service';
import { CreateCounsellingsessionDto } from './dto/create-counsellingsession.dto';
import { UpdateCounsellingsessionDto } from './dto/update-counsellingsession.dto';

@Controller('counsellingsessions')
export class CounsellingsessionsController {
  constructor(private readonly counsellingsessionsService: CounsellingsessionsService) {}

  @Post()
  create(@Body() createCounsellingsessionDto: CreateCounsellingsessionDto) {
    return this.counsellingsessionsService.create(createCounsellingsessionDto);
  }

  @Get()
  findAll() {
    return this.counsellingsessionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.counsellingsessionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCounsellingsessionDto: UpdateCounsellingsessionDto) {
    return this.counsellingsessionsService.update(+id, updateCounsellingsessionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.counsellingsessionsService.remove(+id);
  }
}
