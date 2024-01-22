import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { mock, mockDeep } from 'jest-mock-extended';
import * as bcrypt from 'bcrypt';
import { User, authSchema, authUpdateSchema } from '@tradetrove/shared-types';
import { Auth } from '@tradetrove/shared-types';
import { mockObject } from '@tradetrove/shared-utils';
import { InternalServerErrorException } from '@nestjs/common';

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
  });

  // Additional tests for login, create, findAll, findOne, update, remove
  describe('login', () => {
    it('should return a token', async () => {
      const user = mock<Omit<User, 'password'>>();
      mockJwtService.sign = jest.fn().mockReturnValue('token');
      const result = await service.login(user);

      expect(result).toEqual({
        access_token: 'token',
        token_type: 'Bearer',
      });
    });

    it('should throw an error if no user is provided', async () => {
      const user = null as unknown as Omit<User, 'password'>;
      mockJwtService.sign = jest.fn().mockReturnValue('token');
      await expect(service.login(user)).rejects.toThrow();
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
  describe('findAll', () => {
    it('should return an array of auth records', async () => {
      const authRecords: Auth[] = [mockObject(authSchema)];

      mockPrismaService.auth.findMany = jest
        .fn()
        .mockResolvedValue(authRecords);

      const result = await service.findAll();

      expect(result).toEqual(authRecords);
    });
  });

  describe('update', () => {
    it('should update and return the updated auth record', async () => {
      const authId = '1';
      const updatedAuth = mockObject(authSchema, { id: authId });
      const updateAuthDto = mockObject(authUpdateSchema);

      mockPrismaService.auth.update = jest.fn().mockResolvedValue(updatedAuth);

      const result = await service.update(authId, updateAuthDto);

      expect(result).toEqual(updatedAuth);
    });

    it('should throw NotFoundException if auth record is not found', async () => {
      const authId = '1';
      const updateAuthDto = mockObject(authUpdateSchema);

      mockPrismaService.auth.update = jest.fn().mockRejectedValue(null);

      await expect(service.update(authId, updateAuthDto)).rejects.toThrow(
        InternalServerErrorException,
      );
    });
  });

  describe('remove', () => {
    it('should delete and return the deleted auth record', async () => {
      const authId = '1';
      const deletedAuth: Auth = mockObject(authSchema, { id: authId });
      mockPrismaService.auth.delete = jest.fn().mockResolvedValue(deletedAuth);

      const result = await service.remove(authId);

      expect(result).toEqual(deletedAuth);
    });

    it('should throw NotFoundException if auth record is not found', async () => {
      const authId = '1';
      mockPrismaService.auth.delete = jest.fn().mockRejectedValue(null);

      await expect(service.remove(authId)).rejects.toThrow(
        InternalServerErrorException,
      );
    });
  });
});
