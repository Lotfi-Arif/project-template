import { Test, TestingModule } from '@nestjs/testing';
import { CourseResolver } from './course.resolver';
import { CourseService } from './course.service';
import { Course } from '@app/prisma-generated/generated/nestgraphql/course/course.model';
import { Prisma } from '@prisma/client';

describe('CourseResolver', () => {
  let courseResolver: CourseResolver;
  let courseService: CourseService;

  const mockCourse: Course = {
    id: '1',
    name: 'Test Course',
    description: 'Test Course Description',
    teacherId: 'teacher-id',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  beforeEach(async () => {
    const mockCourseService = {
      createCourse: jest.fn().mockResolvedValue(mockCourse),
      getCourseById: jest.fn().mockResolvedValue(mockCourse),
      updateCourse: jest.fn().mockResolvedValue(mockCourse),
      deleteCourse: jest.fn().mockResolvedValue(mockCourse),
      getCourses: jest.fn().mockResolvedValue([mockCourse]),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CourseResolver,
        {
          provide: CourseService,
          useValue: mockCourseService,
        },
      ],
    }).compile();

    courseResolver = module.get<CourseResolver>(CourseResolver);
    courseService = module.get<CourseService>(CourseService);
  });

  it('should be defined', () => {
    expect(courseResolver).toBeDefined();
  });

  describe('createCourse', () => {
    it('should create a course and return the created course', async () => {
      const courseData: Prisma.CourseCreateInput = {
        name: 'Test Course',
        description: 'Test Course Description',
        teacher: {
          connect: { id: 'teacher-id' },
        },
      };

      const course = await courseResolver.createCourse(courseData);
      expect(course).toEqual(mockCourse);
      expect(courseService.createCourse).toHaveBeenCalledWith(courseData);
    });
  });

  describe('getCourseById', () => {
    it('should return a course with the given id', async () => {
      const courseId = '1';

      const course = await courseResolver.getCourseById(courseId);
      expect(course).toEqual(mockCourse);
      expect(courseService.getCourseById).toHaveBeenCalledWith(courseId);
    });
  });

  describe('updateCourse', () => {
    it('should update a course and return the updated course', async () => {
      const courseId = '1';
      const courseUpdateData: Prisma.CourseUpdateInput = {
        name: 'Updated Test Course',
        description: 'Updated Test Course Description',
      };

      const course = await courseResolver.updateCourse(
        courseId,
        courseUpdateData,
      );
      expect(course).toEqual(mockCourse);
      expect(courseService.updateCourse).toHaveBeenCalledWith({
        id: courseId,
        data: courseUpdateData,
      });
    });
  });

  describe('deleteCourse', () => {
    it('should delete a course and return the deleted course', async () => {
      const courseId = '1';

      const course = await courseResolver.deleteCourse(courseId);
      expect(course).toEqual(mockCourse);
      expect(courseService.deleteCourse).toHaveBeenCalledWith(courseId);
    });
  });

  describe('getCourses', () => {
    it('should return a list of courses', async () => {
      const skip = 0;
      const take = 10;

      const courses = await courseResolver.getCourses(skip, take);
      expect(courses).toEqual([mockCourse]);
      expect(courseService.getCourses).toHaveBeenCalledWith({ skip, take });
    });
  });
});
