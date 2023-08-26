import { Test, TestingModule } from '@nestjs/testing';
import { TeacherService } from './teacher.service';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigModule } from '@nestjs/config';
import { UserRole } from '@app/prisma-generated/generated/nestgraphql/prisma/user-role.enum';

describe('TeacherService', () => {
  let service: TeacherService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule],
      providers: [TeacherService, PrismaService],
    }).compile();

    service = module.get<TeacherService>(TeacherService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getTeachers', () => {
    it('should return an array of teachers', async () => {
      const result = [
        {
          id: '1',
          email: 'test@test.com',
          password: '123123123',
          firstName: 'Lotfi',
          lastName: 'Arif',
          role: UserRole.TEACHER,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '2',
          email: 'test@test.com',
          password: '123123123',
          firstName: 'Lotfi',
          lastName: 'Arif',
          role: UserRole.STUDENT,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
      jest.spyOn(prisma.user, 'findMany').mockResolvedValue(result);
      expect(await service.getTeachers({})).toBe(result);
    });

    it('should return an array of teachers with skip and take', async () => {
      const result = [];
      jest.spyOn(prisma.user, 'findMany').mockResolvedValue(result);
      expect(await service.getTeachers({ skip: 1, take: 1 })).toBe(result);
    });
  });

  describe('getTeacher', () => {
    it('should return a teacher', async () => {
      const result = {
        id: '1',
        email: 'test@test.com',
        password: '123123123',
        firstName: 'Lotfi',
        lastName: 'Arif',
        role: UserRole.TEACHER,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      jest.spyOn(prisma.user, 'findUnique').mockResolvedValue(result);
      expect(await service.getTeacherById('1')).toBe(result);
    });

    it('should return null', async () => {
      jest.spyOn(prisma.user, 'findUnique').mockResolvedValue(null);
      expect(await service.getTeacherById('1')).toBe(null);
    });
  });

  describe('getTeacherByEmail', () => {
    it('should return a teacher', async () => {
      const result = {
        id: '1',
        email: 'test@test.com',
        password: '123123123',
        firstName: 'Lotfi',
        lastName: 'Arif',
        role: UserRole.TEACHER,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(prisma.user, 'findUnique').mockResolvedValue(result);
      expect(await service.getTeacherByEmail('test@test.com')).toBe(result);
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
