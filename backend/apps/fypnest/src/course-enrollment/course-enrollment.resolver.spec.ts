import { Test, TestingModule } from '@nestjs/testing';
import { CourseEnrollmentResolver } from './course-enrollment.resolver';

describe('CourseEnrollmentResolver', () => {
  let resolver: CourseEnrollmentResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseEnrollmentResolver],
    }).compile();

    resolver = module.get<CourseEnrollmentResolver>(CourseEnrollmentResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
