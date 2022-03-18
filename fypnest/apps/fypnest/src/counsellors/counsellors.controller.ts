import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CounsellorsService } from './counsellors.service';
import { CreateCounsellorDto } from './dto/create-counsellor.dto';
import { UpdateCounsellorDto } from './dto/update-counsellor.dto';

@Controller('counsellors')
export class CounsellorsController {
  constructor(private readonly counsellorsService: CounsellorsService) {}

  @Post()
  create(@Body() createCounsellorDto: CreateCounsellorDto) {
    return this.counsellorsService.create(createCounsellorDto);
  }

  @Get()
  findAll() {
    return this.counsellorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.counsellorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCounsellorDto: UpdateCounsellorDto) {
    return this.counsellorsService.update(+id, updateCounsellorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.counsellorsService.remove(+id);
  }
}
