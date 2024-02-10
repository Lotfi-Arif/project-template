import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { PrismaService } from 'nestjs-prisma';
import { JwtService } from '@nestjs/jwt';
import { mockDeep } from 'jest-mock-extended';
import * as bcrypt from 'bcrypt';
import { InternalServerErrorException } from '@nestjs/common';
import {
  Auth,
  authSchema,
  authCreateSchema,
  authUpdateSchema,
  userSchema,
  User,
  loginInputSchema,
} from '@tradetrove/shared-types';
import { mockObject } from '@tradetrove/shared-utils';
import { ok } from 'neverthrow';

jest.mock('bcrypt');

const mockPrismaService = mockDeep<PrismaService>();
const mockJwtService = mockDeep<JwtService>();

const mockUser: User = mockObject(userSchema, {
  id: '1',
  email: 'test@example.com',
  username: 'testuser',
});

const mockAuth: Auth = mockObject(authSchema);
const mockAuthCreateDto = mockObject(authCreateSchema);
const mockAuthUpdateDto = mockObject(authUpdateSchema);
const mockLoginInput = mockObject(loginInputSchema);

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    jest.clearAllMocks();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: PrismaService, useValue: mockPrismaService },
        { provide: JwtService, useValue: mockJwtService },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);

    // mock bycrypt compare
    (bcrypt.compare as jest.Mock).mockResolvedValue(true);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('validateUser', () => {
    it('should return user data without password if validation is successful', async () => {
      // Mock bcrypt.compare to return true during the test
      (bcrypt.compare as jest.Mock).mockResolvedValue(true);

      // Mock user data with password
      const userWithPassword = {
        ...mockUser,
        password: 'hashedPassword', // Set the password to the hashed value
      };

      // Mock PrismaService response
      mockPrismaService.user.findUnique.mockResolvedValue(userWithPassword);

      // Perform the validation
      const result = await service.validateUser(
        userWithPassword.username,
        'hashedPassword', // Pass the hashed password for comparison
      );

      // Define the expected result without the password property
      const expectedUserWithoutPassword = { ...mockUser, password: undefined };

      // Assert the result
      if (result.isOk()) expect(result).toEqual(expectedUserWithoutPassword);
    });

    it('should return null if user is not found', async () => {
      mockPrismaService.user.findUnique.mockResolvedValue(null);

      const result = await service.validateUser('nonexistent', 'password');

      if (result.isOk()) expect(result).toBeNull();
    });

    it('should return null if password is incorrect', async () => {
      mockPrismaService.user.findUnique.mockResolvedValue(mockUser);

      const result = await service.validateUser(
        mockUser.username,
        'incorrectPassword',
      );

      if (result.isOk()) expect(result).toBeNull();
    });
  });

  describe('login', () => {
    it('should return a token', async () => {
      mockJwtService.sign.mockReturnValue('token');

      const result = await service.login(mockLoginInput);

      if (result.isOk())
        expect(result).toEqual({ access_token: 'token', token_type: 'Bearer' });
    });

    it('should throw an error if no user is provided', async () => {
      mockPrismaService.user.findUnique.mockResolvedValue(null);

      const result = await service.login(mockLoginInput);

      if (result.isOk())
        expect(result).toEqual(ok(new Error('Invalid username or password')));
    });
  });

  describe('create', () => {
    it('should create and return an auth record', async () => {
      mockPrismaService.auth.create.mockResolvedValue(mockAuth);

      const result = await service.create(mockAuthCreateDto);

      if (result.isOk()) expect(result).toEqual(ok(mockAuth));
    });

    it('should throw an error if validation fails', async () => {
      const validationError = new Error('Validation failed');
      mockPrismaService.auth.create.mockRejectedValue(validationError);

      const result = await service.create(mockAuthCreateDto);

      if (result.isOk()) expect(result).toEqual(ok(validationError));
    });
  });

  describe('findAll', () => {
    it('should return an array of auth records', async () => {
      const authRecords: Auth[] = [mockAuth];
      mockPrismaService.auth.findMany.mockResolvedValue(authRecords);

      const result = await service.findAll();

      if (result.isOk()) expect(result.value).toEqual(authRecords);
    });
  });

  describe('update', () => {
    it('should update and return the updated auth record', async () => {
      const authId = '1';
      const updatedAuth = { ...mockAuth, id: authId };
      mockPrismaService.auth.update.mockResolvedValue(updatedAuth);

      const result = await service.update(authId, mockAuthUpdateDto);

      if (result.isOk()) expect(result.value).toEqual(updatedAuth);
    });

    it('should throw NotFoundException if auth record is not found', async () => {
      const authId = '1';
      mockPrismaService.auth.update.mockRejectedValue(null);

      const result = await service.update(authId, mockAuthUpdateDto);

      if (result.isOk())
        expect(result).toEqual(
          new InternalServerErrorException('Error updating auth record'),
        );
    });
  });

  describe('remove', () => {
    it('should delete and return the deleted auth record', async () => {
      const authId = '1';
      const deletedAuth: Auth = { ...mockAuth, id: authId };
      mockPrismaService.auth.delete.mockResolvedValue(deletedAuth);

      const result = await service.remove(authId);

      if (result.isOk()) expect(result.value).toEqual(deletedAuth);
    });

    it('should throw NotFoundException if auth record is not found', async () => {
      const authId = '1';
      mockPrismaService.auth.delete.mockRejectedValue(null);

      const result = await service.remove(authId);

      if (result.isOk())
        expect(result.value).toEqual(
          new InternalServerErrorException('Error removing auth record'),
        );
    });
  });
});
