import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { PrismaService } from '../prisma/prisma.service';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { UserCreateInput, User } from '@tradetrove/shared-types';
import * as bcrypt from 'bcrypt';

jest.mock('bcrypt');

describe('UserService', () => {
  let userService: UserService;
  let prismaService: DeepMockProxy<PrismaService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: PrismaService,
          useValue: mockDeep<PrismaService>(),
        },
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
    prismaService = module.get<PrismaService>(
      PrismaService,
    ) as DeepMockProxy<PrismaService>;

    // Mock bcrypt.hash to return a predictable value
    (bcrypt.hash as jest.Mock).mockResolvedValue('hashedPassword');
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });

  describe('create', () => {
    it('should create a new user', async () => {
      const userDto = mockDeep<UserCreateInput>();
      const mockUser: User = {
        id: 'some-id',
        email: 'example@example.com',
        username: 'exampleUser',
        password: 'hashedPassword',
        name: null,
        role: 'userRole',
        status: 'active',
        address: null,
        phone: null,
        profilePictureUrl: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      prismaService.user.create.mockResolvedValueOnce(mockUser);

      const createdUser = await userService.create(userDto);
      expect(createdUser).toEqual(mockUser);
      expect(bcrypt.hash).toHaveBeenCalledWith(userDto.password, 10);
      expect(prismaService.user.create).toHaveBeenCalledWith({
        data: {
          ...userDto,
          password: 'hashedPassword',
        },
      });
    });

    it('should throw an error if the user already exists', async () => {
      const userDto = mockDeep<UserCreateInput>();
      prismaService.user.create.mockRejectedValueOnce(
        new Error('Unique constraint failed on the fields: (`email`)'),
      );

      await expect(userService.create(userDto)).rejects.toThrow(
        'Unique constraint failed on the fields: (`email`)',
      );
    });

    it('should throw an error if the email is invalid', async () => {
      const userDto = mockDeep<UserCreateInput>();
      prismaService.user.create.mockRejectedValueOnce(
        new Error('Invalid email'),
      );

      await expect(userService.create(userDto)).rejects.toThrow(
        'Invalid email',
      );
    });

    it('should throw an error if the username is invalid', async () => {
      const userDto = mockDeep<UserCreateInput>();
      prismaService.user.create.mockRejectedValueOnce(
        new Error('Invalid username'),
      );

      await expect(userService.create(userDto)).rejects.toThrow(
        'Invalid username',
      );
    });

    it('should throw an error if the password is invalid', async () => {
      const userDto = mockDeep<UserCreateInput>();
      prismaService.user.create.mockRejectedValueOnce(
        new Error('Invalid password'),
      );

      await expect(userService.create(userDto)).rejects.toThrow(
        'Invalid password',
      );
    });
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const mockUsers: User[] = [
        {
          id: 'some-id',
          email: 'example@test.com',
          username: 'exampleUser',
          password: 'hashedPassword',
          name: null,
          role: 'userRole',
          status: 'active',
          address: null,
          phone: null,
          profilePictureUrl: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      prismaService.user.findMany.mockResolvedValueOnce(mockUsers);

      const users = await userService.findAll();
      expect(users).toEqual(mockUsers);
      expect(prismaService.user.findMany).toHaveBeenCalled();
    });

    it('should return an empty array if no users exist', async () => {
      prismaService.user.findMany.mockResolvedValueOnce([]);

      const users = await userService.findAll();
      expect(users).toEqual([]);
      expect(prismaService.user.findMany).toHaveBeenCalled();
    });

    it('should throw an error if the query fails', async () => {
      prismaService.user.findMany.mockRejectedValueOnce(
        new Error('Some error'),
      );

      await expect(userService.findAll()).rejects.toThrow('Some error');
    });
  });

  describe('findOne', () => {
    it('should return a user', async () => {
      const mockUser: User = {
        id: 'some-id',
        email: 'test@test.com',
        username: 'exampleUser',
        password: 'hashedPassword',
        name: null,
        role: 'userRole',
        status: 'active',
        address: null,
        phone: null,
        profilePictureUrl: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      prismaService.user.findUnique.mockResolvedValueOnce(mockUser);

      const user = await userService.findOne('some-id');
      expect(user).toEqual(mockUser);
      expect(prismaService.user.findUnique).toHaveBeenCalledWith({
        where: { id: 'some-id' },
      });
    });

    it('should return null if the user does not exist', async () => {
      prismaService.user.findUnique.mockResolvedValueOnce(null);

      const user = await userService.findOne('some-id');
      expect(user).toBeNull();
      expect(prismaService.user.findUnique).toHaveBeenCalledWith({
        where: { id: 'some-id' },
      });
    });

    it('should throw an error if the query fails', async () => {
      prismaService.user.findUnique.mockRejectedValueOnce(
        new Error('Some error'),
      );

      await expect(userService.findOne('some-id')).rejects.toThrow(
        'Some error',
      );
    });
  });

  describe('update', () => {
    it('should update a user', async () => {
      const mockUser: User = {
        id: 'some-id',
        email: 'test@test.com',
        username: 'exampleUser',
        password: 'hashedPassword',
        name: null,
        role: 'userRole',
        status: 'active',
        address: null,
        phone: null,
        profilePictureUrl: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const userDto = mockDeep<UserCreateInput>();
      prismaService.user.update.mockResolvedValueOnce(mockUser);

      const updatedUser = await userService.update('some-id', userDto);

      expect(updatedUser).toEqual(mockUser);
      expect(prismaService.user.update).toHaveBeenCalledWith({
        where: { id: 'some-id' },
        data: userDto,
      });
    });

    it('should throw an error if the user does not exist', async () => {
      const userDto = mockDeep<UserCreateInput>();
      prismaService.user.update.mockRejectedValueOnce(
        new Error('User not found'),
      );

      await expect(userService.update('some-id', userDto)).rejects.toThrow(
        'User not found',
      );
    });

    it('should throw an error if the email is invalid', async () => {
      const userDto = mockDeep<UserCreateInput>();
      prismaService.user.update.mockRejectedValueOnce(
        new Error('Invalid email'),
      );

      await expect(userService.update('some-id', userDto)).rejects.toThrow(
        'Invalid email',
      );
    });
  });
});
