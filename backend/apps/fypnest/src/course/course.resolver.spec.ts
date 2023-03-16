import { Test, TestingModule } from '@nestjs/testing';
import { CourseResolver } from './course.resolver';
import { CourseService } from './course.service';

const mockCourseService = () => ({
  getCourses: jest.fn(),
  getCourseById: jest.fn(),
});

describe('CourseResolver', () => {
  let courseResolver: CourseResolver;
  let courseService: CourseService;

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

    courseResolver = module.get<CourseResolver>(CourseResolver);
    courseService = module.get<CourseService>(CourseService);
  });

  it('should be defined', () => {
    expect(courseResolver).toBeDefined();
  });

  describe('findAllCourses', () => {
    it('should return an array of courses', async () => {
      const courses = [
        {
          id: '1',
          name: 'Course 1',
          description: 'Course 1 description',
          teacherId: 'teacher-1',
        },
        {
          id: '2',
          name: 'Course 2',
          description: 'Course 2 description',
          teacherId: 'teacher-2',
        },
      ];

      courseService.getCourses = jest.fn().mockResolvedValue(courses);

      const result = await courseResolver.getCourses();
      expect(result).toEqual(courses);
    });
  });

  describe('findOneCourse', () => {
    it('should return a course by id', async () => {
      const course = {
        id: '1',
        name: 'Course 1',
        description: 'Course 1 description',
        teacherId: 'teacher-1',
      };

      courseService.getCourseById = jest.fn().mockResolvedValue(course);

      const result = await courseResolver.getCourseById(course.id);
      expect(result).toEqual(course);
    });
  });
});
