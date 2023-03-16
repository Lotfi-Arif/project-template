import { Module } from '@nestjs/common';
import { TeacherResolver } from './teacher.resolver';
import { TeacherService } from './teacher.service';

@Module({
  providers: [TeacherResolver, TeacherService]
})
export class TeacherModule {}
