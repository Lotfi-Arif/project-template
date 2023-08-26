import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { CourseEnrollmentService } from './course-enrollment.service';
import { CourseEnrollmentCreateInput } from '@app/prisma-generated/generated/nestgraphql/course-enrollment/course-enrollment-create.input';
import { CourseEnrollmentUpdateInput } from '@app/prisma-generated/generated/nestgraphql/course-enrollment/course-enrollment-update.input';

describe('CourseEnrollmentService', () => {
  let service: CourseEnrollmentService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseEnrollmentService, PrismaService],
    }).compile();

    service = module.get<CourseEnrollmentService>(CourseEnrollmentService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createCourseEnrollment', () => {
    it('should create a course enrollment', async () => {
      const courseEnrollmentCreateInput: CourseEnrollmentCreateInput = {
        course: {
          connect: { id: 'course-id' },
        },
        user: {
          connect: { id: 'user-id' },
        },
      };

      const courseEnrollment = {
        id: 'enrollment-id',
        courseId: 'course-id',
        userId: 'user-id',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest
        .spyOn(prisma.courseEnrollment, 'create')
        .mockResolvedValue(courseEnrollment as any);

      const result = await service.createCourseEnrollment(
        courseEnrollmentCreateInput,
      );
      expect(result).toEqual(courseEnrollment);
    });
  });
  describe('getCourseEnrollmentById', () => {
    it('should get a course enrollment by id', async () => {
      const enrollmentId = 'enrollment-id';

      const courseEnrollment = {
        id: enrollmentId,
        courseId: 'course-id',
        userId: 'user-id',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest
        .spyOn(prisma.courseEnrollment, 'findUnique')
        .mockResolvedValue(courseEnrollment as any);

      const result = await service.getCourseEnrollmentById(enrollmentId);
      expect(result).toEqual(courseEnrollment);
    });
  });

  describe('deleteCourseEnrollment', () => {
    it('should delete a course enrollment by id', async () => {
      const enrollmentId = 'enrollment-id';

      const courseEnrollment = {
        id: enrollmentId,
        courseId: 'course-id',
        userId: 'user-id',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest
        .spyOn(prisma.courseEnrollment, 'delete')
        .mockResolvedValue(courseEnrollment as any);

      const result = await service.deleteCourseEnrollment(enrollmentId);
      expect(result).toEqual(courseEnrollment);
    });
  });

  describe('getCourseEnrollments', () => {
    it('should get all course enrollments with pagination', async () => {
      const courseEnrollments = [
        {
          id: 'enrollment-id-1',
          courseId: 'course-id-1',
          userId: 'user-id-1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'enrollment-id-2',
          courseId: 'course-id-2',
          userId: 'user-id-2',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      jest
        .spyOn(prisma.courseEnrollment, 'findMany')
        .mockResolvedValue(courseEnrollments as any);

      const result = await service.getCourseEnrollments({ skip: 0, take: 2 });
      expect(result).toEqual(courseEnrollments);
    });
  });

  describe('updateCourseEnrollment', () => {
    it('should update a course enrollment', async () => {
      const enrollmentId = 'enrollment-id';
      const courseEnrollmentUpdateInput: CourseEnrollmentUpdateInput = {
        course: {
          connect: { id: 'new-course-id' },
        },
      };

      const courseEnrollment = {
        id: enrollmentId,
        courseId: 'new-course-id',
        userId: 'user-id',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest
        .spyOn(prisma.courseEnrollment, 'update')
        .mockResolvedValue(courseEnrollment as any);

      const result = await service.updateCourseEnrollment({
        id: enrollmentId,
        data: courseEnrollmentUpdateInput,
      });
      expect(result).toEqual(courseEnrollment);
    });
  });
});
