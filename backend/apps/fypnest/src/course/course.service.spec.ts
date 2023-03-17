import { Test, TestingModule } from '@nestjs/testing';
import { CourseService } from './course.service';
import { PrismaService } from 'nestjs-prisma';
import { Course } from '@app/prisma-generated/generated/nestgraphql/course/course.model';
import { Prisma } from '@prisma/client';

describe('CourseService', () => {
  let courseService: CourseService;
  let prismaService: PrismaService;

  const mockCourse: Course = {
    id: '1',
    name: 'Test Course',
    description: 'Test Course Description',
    teacherId: 'teacher-id',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  beforeEach(async () => {
    const mockPrismaService = {
      course: {
        create: jest.fn().mockResolvedValue(mockCourse),
        findUnique: jest.fn().mockResolvedValue(mockCourse),
        update: jest.fn().mockResolvedValue(mockCourse),
        delete: jest.fn().mockResolvedValue(mockCourse),
        findMany: jest.fn().mockResolvedValue([mockCourse]),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CourseService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    courseService = module.get<CourseService>(CourseService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(courseService).toBeDefined();
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

      const course = await courseService.createCourse(courseData);
      expect(course).toEqual(mockCourse);
      expect(prismaService.course.create).toHaveBeenCalledWith({
        data: courseData,
      });
    });
  });

  describe('getCourseById', () => {
    it('should return a course with the given id', async () => {
      const courseId = '1';

      const course = await courseService.getCourseById(courseId);
      expect(course).toEqual(mockCourse);
      expect(prismaService.course.findUnique).toHaveBeenCalledWith({
        where: { id: courseId },
      });
    });
  });

  describe('updateCourse', () => {
    it('should update a course and return the updated course', async () => {
      const courseId = '1';
      const courseUpdateData: Prisma.CourseUpdateInput = {
        name: 'Updated Test Course',
        description: 'Updated Test Course Description',
      };

      const course = await courseService.updateCourse({
        id: courseId,
        data: courseUpdateData,
      });
      expect(course).toEqual(mockCourse);
      expect(prismaService.course.update).toHaveBeenCalledWith({
        where: { id: courseId },
        data: courseUpdateData,
      });
    });
  });

  describe('deleteCourse', () => {
    it('should delete a course and return the deleted course', async () => {
      const courseId = '1';

      const course = await courseService.deleteCourse(courseId);
      expect(course).toEqual(mockCourse);
      expect(prismaService.course.delete).toHaveBeenCalledWith({
        where: { id: courseId },
      });
    });
  });

  describe('getCourses', () => {
    it('should return a list of courses', async () => {
      const skip = 0;
      const take = 10;

      const courses = await courseService.getCourses({ skip, take });
      expect(courses).toEqual([mockCourse]);
      expect(prismaService.course.findMany).toHaveBeenCalledWith({
        skip,
        take,
      });
    });
  });
});
