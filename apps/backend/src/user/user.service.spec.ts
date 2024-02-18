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
  });
});
