import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { mockObject } from '@tradetrove/shared-utils';
import {
  User,
  UserCreateInput,
  UserUpdateInput,
  userCreateSchema,
  userSchema,
  userUpdateSchema,
} from '@tradetrove/shared-types';
import { mockDeep } from 'jest-mock-extended';

const mockUser: User = mockObject(userSchema);
const mockUsers: User[] = [mockObject(userSchema)];
const mockUserDTO: UserCreateInput = mockObject(userCreateSchema);
const mockUserUpdateDTO: UserUpdateInput = mockObject(userUpdateSchema, {
  email: 'test@test.com',
});

describe('UserController', () => {
  let mockController: UserController;
  let mockService: UserService;

  beforeEach(async () => {
    mockService = mockDeep<UserService>();

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [{ provide: UserService, useValue: mockService }],
    }).compile();

    mockController = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(mockController).toBeDefined();
  });

  describe('create', () => {
    it('should create a new user', async () => {
      mockService.create = jest.fn().mockResolvedValueOnce(mockUser);

      const result = await mockController.create(mockUserDTO);

      if (result.isOk()) expect(result.value).toEqual(mockUser);
    });
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      mockService.findAll = jest.fn().mockResolvedValueOnce(mockUsers);

      const result = await mockController.findAll();

      if (result.isOk()) expect(result.value).toEqual(mockUsers);
    });
  });

  describe('findOne', () => {
    it('should return a user by id', async () => {
      mockService.findOne = jest.fn().mockResolvedValueOnce(mockUser);

      const result = await mockController.findOne('1');

      if (result.isOk()) expect(result.value).toEqual(mockUser);
    });
  });

  describe('update', () => {
    it('should update a user', async () => {
      mockService.update = jest.fn().mockResolvedValueOnce(mockUser);

      const result = await mockController.update('1', mockUserUpdateDTO);

      if (result.isOk()) expect(result.value).toEqual(mockUser);
    });
  });

  describe('remove', () => {
    it('should remove a user', async () => {
      mockService.remove = jest.fn().mockResolvedValueOnce(mockUser);

      const result = await mockController.remove('1');

      if (result.isOk()) expect(result.value).toEqual(mockUser);
    });
  });
});
