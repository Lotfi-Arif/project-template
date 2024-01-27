import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { PrismaService } from '../prisma/prisma.service';
import { mockDeep } from 'jest-mock-extended';
import {
  UserCreateInput,
  User,
  userSchema,
  userCreateSchema,
  userUpdateSchema,
  UserUpdateInput,
} from '@tradetrove/shared-types';
import * as bcrypt from 'bcrypt';
import { mockObject } from '@tradetrove/shared-utils';

jest.mock('bcrypt');

const mockUser: User = mockObject(userSchema, {
  id: 'some-id',
  password: 'hashedPassword',
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

    // Mock bcrypt.hash to return a predictable value
    (bcrypt.hash as jest.Mock).mockResolvedValue('hashedPassword');
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
      console.log(createdUser);
      expect(createdUser).toEqual(mockUser);
      expect(bcrypt.hash).toHaveBeenCalledWith(mockUserDTO.password, 10);
      expect(prismaService.user.create).toHaveBeenCalledWith({
        data: {
          ...mockUserDTO,
          password: 'hashedPassword',
        },
      });
    });

    it('should throw an error if the user already exists', async () => {
      prismaService.user.create = jest
        .fn()
        .mockRejectedValueOnce(
          new Error('Unique constraint failed on the fields: (`email`)'),
        );

      await expect(userService.create(mockUserDTO)).rejects.toThrow(
        'Unique constraint failed on the fields: (`email`)',
      );
    });

    it('should throw an error if the email is invalid', async () => {
      prismaService.user.create = jest
        .fn()
        .mockRejectedValueOnce(new Error('Invalid email'));

      await expect(userService.create(mockUserDTO)).rejects.toThrow(
        'Invalid email',
      );
    });

    it('should throw an error if the username is invalid', async () => {
      prismaService.user.create = jest
        .fn()
        .mockRejectedValueOnce(new Error('Invalid username'));

      await expect(userService.create(mockUserDTO)).rejects.toThrow(
        'Invalid username',
      );
    });

    it('should throw an error if the password is invalid', async () => {
      prismaService.user.create = jest
        .fn()
        .mockRejectedValueOnce(new Error('Invalid password'));

      await expect(userService.create(mockUserDTO)).rejects.toThrow(
        'Invalid password',
      );
    });
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      prismaService.user.findMany = jest.fn().mockResolvedValueOnce(mockUsers);

      const users = await userService.findAll();
      expect(users).toEqual(mockUsers);
      expect(prismaService.user.findMany).toHaveBeenCalled();
    });

    it('should return an empty array if no users exist', async () => {
      prismaService.user.findMany = jest.fn().mockResolvedValueOnce([]);

      const users = await userService.findAll();
      expect(users).toEqual([]);
      expect(prismaService.user.findMany).toHaveBeenCalled();
    });

    it('should throw an error if the query fails', async () => {
      prismaService.user.findMany = jest
        .fn()
        .mockRejectedValueOnce(new Error('Some error'));

      await expect(userService.findAll()).rejects.toThrow('Some error');
    });
  });

  describe('findOne', () => {
    it('should return a user', async () => {
      prismaService.user.findUnique = jest.fn().mockResolvedValueOnce(mockUser);

      const user = await userService.findOne('some-id');
      expect(user).toEqual(mockUser);
      expect(prismaService.user.findUnique).toHaveBeenCalledWith({
        where: { id: 'some-id' },
      });
    });

    it('should return null if the user does not exist', async () => {
      prismaService.user.findUnique = jest.fn().mockResolvedValueOnce(null);

      const user = await userService.findOne('some-id');
      expect(user).toBeNull();
      expect(prismaService.user.findUnique).toHaveBeenCalledWith({
        where: { id: 'some-id' },
      });
    });

    it('should throw an error if the query fails', async () => {
      prismaService.user.findUnique = jest
        .fn()
        .mockRejectedValueOnce(new Error('Some error'));

      await expect(userService.findOne('some-id')).rejects.toThrow(
        'Some error',
      );
    });
  });

  describe('update', () => {
    it('should update a user', async () => {
      prismaService.user.update = jest.fn().mockResolvedValueOnce(mockUser);

      const updatedUser = await userService.update(
        'some-id',
        mockUserUpdateDTO,
      );

      expect(updatedUser).toEqual(mockUser);
      expect(prismaService.user.update).toHaveBeenCalledWith({
        where: { id: 'some-id' },
        data: mockUserUpdateDTO,
      });
    });

    it('should throw an error if the user does not exist', async () => {
      prismaService.user.update = jest
        .fn()
        .mockRejectedValueOnce(new Error('User not found'));

      await expect(userService.update('some-id', mockUserDTO)).rejects.toThrow(
        'User not found',
      );
    });

    it('should throw an error if the email is invalid', async () => {
      prismaService.user.update = jest
        .fn()
        .mockRejectedValueOnce(new Error('Invalid email'));

      await expect(userService.update('some-id', mockUserDTO)).rejects.toThrow(
        'Invalid email',
      );
    });
  });
});
