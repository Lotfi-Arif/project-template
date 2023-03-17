import { Test, TestingModule } from '@nestjs/testing';
import { CourseResolver } from './course.resolver';
import { CourseService } from './course.service';

// Mock the CourseService
const mockCourseService = () => ({
  getCourses: jest.fn(),
  getCourseById: jest.fn(),
});

describe('CourseResolver', () => {
  let resolver: CourseResolver;
  let courseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CourseResolver,
        {
          provide: CourseService,
          useFactory: mockCourseService,
        },
      ],
    }).compile();

    resolver = module.get<CourseResolver>(CourseResolver);
    courseService = module.get<CourseService>(CourseService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('findAllCourses', () => {
    it('should return an array of courses', async () => {
      const result = [{ id: '1', name: 'Test Course' }];
      courseService.getCourses.mockResolvedValue(result);

      const courses = await resolver.getCourses();
      expect(courses).toEqual(result);
    });
  });

  describe('findOneCourse', () => {
    it('should return a course by its id', async () => {
      const result = { id: '1', name: 'Test Course' };
      courseService.getCourseById.mockResolvedValue(result);

      const course = await resolver.getCourseById('1');
      expect(course).toEqual(result);
    });
  });

  // Add more test cases for other resolver methods if needed
});
