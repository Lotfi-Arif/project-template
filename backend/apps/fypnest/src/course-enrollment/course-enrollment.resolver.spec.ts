import { Test, TestingModule } from '@nestjs/testing';
import { CourseEnrollmentResolver } from './course-enrollment.resolver';
import { CourseEnrollmentService } from './course-enrollment.service';
import { Prisma } from '@prisma/client';
import { CourseEnrollment } from '@app/prisma-generated/generated/nestgraphql/course-enrollment/course-enrollment.model';

describe('CourseEnrollmentResolver', () => {
  let resolver: CourseEnrollmentResolver;
  let courseEnrollmentService: CourseEnrollmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CourseEnrollmentResolver,
        {
          provide: CourseEnrollmentService,
          useValue: {
            createCourseEnrollment: jest.fn(),
            getCourseEnrollmentById: jest.fn(),
            deleteCourseEnrollment: jest.fn(),
            getCourseEnrollments: jest.fn(),
            updateCourseEnrollment: jest.fn(),
          },
        },
      ],
    }).compile();

    resolver = module.get<CourseEnrollmentResolver>(CourseEnrollmentResolver);
    courseEnrollmentService = module.get<CourseEnrollmentService>(
      CourseEnrollmentService,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  // Tests for 'courseEnrollments' query
  it('should get enrollments', async () => {
    const params: { skip?: number; take?: number } = { skip: 0, take: 10 };
    const result: CourseEnrollment[] = [
      {
        id: '1',
        courseId: 'course-1',
        userId: 'user-1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2',
        courseId: 'course-2',
        userId: 'user-2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    jest
      .spyOn(courseEnrollmentService, 'getCourseEnrollments')
      .mockResolvedValueOnce(result);
    expect(await resolver.courseEnrollments(params.skip, params.take)).toEqual(
      result,
    );
  });

  it('should create course enrollment', async () => {
    const data: Prisma.CourseEnrollmentCreateInput = {
      course: {
        connect: {
          id: 'course-1',
        },
      },
      user: {
        connect: {
          id: 'user-1',
        },
      },
    };
    const result: CourseEnrollment = {
      id: '1',
      courseId: 'course-1',
      userId: 'user-1',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    jest
      .spyOn(courseEnrollmentService, 'createCourseEnrollment')
      .mockResolvedValueOnce(result);
    expect(await resolver.createCourseEnrollment(data)).toEqual(result);
  });

  it('should get course enrollment by id', async () => {
    const id = '1';
    const result: CourseEnrollment = {
      id: '1',
      courseId: 'course-1',
      userId: 'user-1',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    jest
      .spyOn(courseEnrollmentService, 'getCourseEnrollmentById')
      .mockResolvedValueOnce(result);
    expect(await resolver.courseEnrollment(id)).toEqual(result);
  });

  it('should update course enrollment', async () => {
    const id = '1';
    const data: Prisma.CourseEnrollmentUpdateInput = {
      course: {
        connect: {
          id: 'course-2',
        },
      },
    };
    const result: CourseEnrollment = {
      id: '1',
      courseId: 'course-2',
      userId: 'user-1',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    jest
      .spyOn(courseEnrollmentService, 'updateCourseEnrollment')
      .mockResolvedValueOnce(result);
    expect(await resolver.updateCourseEnrollment(id, data)).toEqual(result);
  });

  it('should delete course enrollment', async () => {
    const id = '1';
    const result: CourseEnrollment = {
      id: '1',
      courseId: 'course-1',
      userId: 'user-1',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    jest
      .spyOn(courseEnrollmentService, 'deleteCourseEnrollment')
      .mockResolvedValueOnce(result);
    expect(await resolver.deleteCourseEnrollment(id)).toEqual(result);
  });
});
