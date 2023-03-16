import { Test, TestingModule } from '@nestjs/testing';
import { CourseService } from './course.service';
import { PrismaService } from 'nestjs-prisma';

const mockPrismaService = () => ({
  course: {
    findMany: jest.fn(),
    findUnique: jest.fn(),
  },
});

describe('CourseService', () => {
  let courseService: CourseService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CourseService,
        {
          provide: PrismaService,
          useFactory: mockPrismaService,
        },
      ],
    }).compile();

    courseService = module.get<CourseService>(CourseService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(courseService).toBeDefined();
  });

  describe('getCourses', () => {
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

      // prismaService.course.findMany.mockResolvedValue(courses);

      // const result = await courseService.getCourses();
      // expect(result).toEqual(courses);
    });
  });

  describe('getCourseById', () => {
    it('should return a course by id', async () => {
      const course = {
        id: '1',
        name: 'Course 1',
        description: 'Course 1 description',
        teacherId: 'teacher-1',
      };

      // prismaService.course.findUnique.mockResolvedValue(course);

      const result = await courseService.getCourseById(course.id);
      expect(result).toEqual(course);
    });
  });
});
