import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { mockDeep } from 'jest-mock-extended';
import * as bcrypt from 'bcrypt';

describe('AuthService', () => {
  let service: AuthService;
  let mockPrismaService: PrismaService;
  let mockJwtService: JwtService;

  beforeEach(async () => {
    mockPrismaService = mockDeep<PrismaService>();
    mockJwtService = mockDeep<JwtService>();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: PrismaService, useValue: mockPrismaService },
        { provide: JwtService, useValue: mockJwtService },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    mockPrismaService = module.get<PrismaService>(PrismaService);
    mockJwtService = module.get<JwtService>(JwtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('validateUser', () => {
    it('should return user data without password if validation is successful', async () => {
      const user = {
        id: '1',
        username: 'testuser',
        email: 'test@example.com',
        password: await bcrypt.hash('password', 10),
      };
      mockPrismaService.user.findUnique = jest.fn().mockResolvedValue(user);

      const result = await service.validateUser('testuser', 'password');
      expect(result).toEqual({
        id: user.id,
        username: user.username,
        email: user.email,
      });
    });

    it('should return null if user is not found', async () => {
      mockPrismaService.user.findUnique = jest.fn().mockResolvedValue(null);
      const result = await service.validateUser('nonexistent', 'password');
      expect(result).toBeNull();
    });

    // Add more tests for other methods like login, create, etc.
  });

  // Additional tests for login, create, findAll, findOne, update, remove
  describe('login', () => {
    it('should return a token', async () => {
      const user = {
        id: '1',
        username: 'testuser',
        email: 'test@test.com',
      };
      mockJwtService.sign = jest.fn().mockReturnValue('token');
      const result = await service.login(user);

      expect(result).toEqual({
        access_token: 'token',
        token_type: 'Bearer',
      });
    });

    it('should throw an error if no user is provided', async () => {
      await expect(
        service.login(
          undefined as unknown as {
            id: string;
            username: string;
            email: string;
          },
        ),
      ).rejects.toThrow();
    });
  });

  describe('create', () => {
    it('should return an auth object', async () => {
      const auth = {
        id: '1',
        token: 'token',
        user: {
          connect: {
            id: '1',
          },
        },
      };
      mockPrismaService.auth.create = jest.fn().mockResolvedValue(auth);
      const result = await service.create(auth);

      expect(result).toEqual(auth);
    });
  });

  // TODO: Additional tests for findAll, findOne, update, remove
});
