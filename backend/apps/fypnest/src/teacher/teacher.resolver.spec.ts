import { Test, TestingModule } from '@nestjs/testing';
import { TeacherResolver } from './teacher.resolver';

describe('TeacherResolver', () => {
  let resolver: TeacherResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeacherResolver],
    }).compile();

    resolver = module.get<TeacherResolver>(TeacherResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
