import { Test, TestingModule } from '@nestjs/testing';
import { CourseEnrollmentService } from './course-enrollment.service';

describe('CourseEnrollmentService', () => {
  let service: CourseEnrollmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseEnrollmentService],
    }).compile();

    service = module.get<CourseEnrollmentService>(CourseEnrollmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
