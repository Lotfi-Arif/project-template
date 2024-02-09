import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { PrismaService } from 'nestjs-prisma';
import { mockDeep } from 'jest-mock-extended';
import {
  UserCreateInput,
  User,
  userSchema,
  userCreateSchema,
  userUpdateSchema,
  UserUpdateInput,
} from '@tradetrove/shared-types';
import { mockObject } from '@tradetrove/shared-utils';

const mockUser: User = mockObject(userSchema, {
  id: 'some-id',
});
const mockUsers: User[] = [mockObject(userSchema)];
const mockUserDTO: UserCreateInput = mockObject(userCreateSchema);
const mockUserUpdateDTO: UserUpdateInput = mockObject(userUpdateSchema, {
  email: 'test@test.com',
});

describe('UserService', () => {
  let userService: UserService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    prismaService = mockDeep<PrismaService>();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: PrismaService,
          useValue: prismaService,
        },
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });

  describe('create', () => {
    it('should create a new user', async () => {
      prismaService.user.create = jest.fn().mockResolvedValueOnce(mockUser);

      const createdUser = await userService.create(mockUserDTO);

      if (createdUser.isOk()) expect(createdUser.value).toEqual(mockUser);
      expect(prismaService.user.create).toHaveBeenCalledWith({
        data: {
          ...mockUserDTO,
        },
      });
    });

    it('should return an error result if the user already exists', async () => {
      // Mock the Prisma service to simulate a unique constraint failure
      prismaService.user.create = jest
        .fn()
        .mockRejectedValue(
          new Error('Unique constraint failed on the fields: (`email`)'),
        );

      const result = await userService.create(mockUserDTO);

      // Check that the result is an error
      expect(result.isErr()).toBe(true);
      if (result.isErr())
        expect(result.error.message).toBe('Error creating user');
    });

    it('should throw an error if the email is invalid', async () => {
      prismaService.user.create = jest
        .fn()
        .mockRejectedValueOnce(new Error('Error creating user'));

      const result = await userService.create(mockUserDTO);

      // Check that the result is an error
      expect(result.isErr()).toBe(true);
      if (result.isErr())
        expect(result.error.message).toBe('Error creating user');
    });

    it('should throw an error if the username is invalid', async () => {
      prismaService.user.create = jest
        .fn()
        .mockRejectedValueOnce(new Error('Error creating user'));

      const result = await userService.create(mockUserDTO);

      // Check that the result is an error
      expect(result.isErr()).toBe(true);
      if (result.isErr())
        expect(result.error.message).toBe('Error creating user');
    });
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      prismaService.user.findMany = jest.fn().mockResolvedValueOnce(mockUsers);

      const users = await userService.findAll();

      if (users.isOk()) expect(users.value).toEqual(mockUsers);
      expect(prismaService.user.findMany).toHaveBeenCalled();
    });

    it('should return an empty array if no users exist', async () => {
      prismaService.user.findMany = jest.fn().mockResolvedValueOnce([]);

      const users = await userService.findAll();

      if (users.isOk()) expect(users.value).toEqual([]);
      expect(prismaService.user.findMany).toHaveBeenCalled();
    });

    it('should throw an error if the query fails', async () => {
      prismaService.user.findMany = jest
        .fn()
        .mockRejectedValueOnce(new Error('Error finding all users'));

      const result = await userService.findAll();

      // Check that the result is an error
      expect(result.isErr()).toBe(true);
      if (result.isErr())
        expect(result.error.message).toBe('Error finding all users');
    });
  });

  describe('findOne', () => {
    it('should return a user', async () => {
      prismaService.user.findUnique = jest.fn().mockResolvedValueOnce(mockUser);

      const user = await userService.findOne('some-id');

      if (user.isOk()) expect(user.value).toEqual(mockUser);
      expect(prismaService.user.findUnique).toHaveBeenCalledWith({
        where: { id: 'some-id' },
      });
    });

    it('should return null if the user does not exist', async () => {
      prismaService.user.findUnique = jest.fn().mockResolvedValueOnce(null);

      const user = await userService.findOne('some-id');

      if (user.isOk()) expect(user.value).toBeNull();
      expect(prismaService.user.findUnique).toHaveBeenCalledWith({
        where: { id: 'some-id' },
      });
    });

    it('should throw an error if the query fails', async () => {
      prismaService.user.findUnique = jest
        .fn()
        .mockRejectedValueOnce(new Error('Error finding user'));

      const result = await userService.findOne('some-id');

      // Check that the result is an error
      expect(result.isErr()).toBe(true);
      if (result.isErr())
        expect(result.error.message).toBe('Error finding user');
    });
  });

  describe('update', () => {
    it('should update a user', async () => {
      prismaService.user.update = jest.fn().mockResolvedValueOnce(mockUser);

      const updatedUser = await userService.update(
        'some-id',
        mockUserUpdateDTO,
      );

      if (updatedUser.isOk()) expect(updatedUser.value).toEqual(mockUser);
      expect(prismaService.user.update).toHaveBeenCalledWith({
        where: { id: 'some-id' },
        data: mockUserUpdateDTO,
      });
    });

    it('should throw an error if the user does not exist', async () => {
      prismaService.user.update = jest
        .fn()
        .mockRejectedValueOnce(new Error('Error updating user'));

      const result = await userService.update('some-id', mockUserUpdateDTO);

      // Check that the result is an error
      expect(result.isErr()).toBe(true);
      if (result.isErr())
        expect(result.error.message).toBe('Error updating user');
    });

    it('should throw an error if the email is invalid', async () => {
      prismaService.user.update = jest
        .fn()
        .mockRejectedValueOnce(new Error('Error updating user'));

      const result = await userService.update('some-id', mockUserUpdateDTO);

      // Check that the result is an error
      expect(result.isErr()).toBe(true);
      if (result.isErr())
        expect(result.error.message).toBe('Error updating user');
    });
  });
});
