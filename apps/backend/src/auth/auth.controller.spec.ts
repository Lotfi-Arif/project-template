import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {
  Login,
  LoginInput,
  AuthCreateInput,
  AuthUpdateInput,
  Auth,
  loginInputSchema,
  loginschema,
  userSchema,
  authSchema,
  authUpdateSchema,
  authCreateSchema,
} from '@tradetrove/shared-types';
import { mockObject } from '@tradetrove/shared-utils';
import { mockDeep } from 'jest-mock-extended';

const loginInput: LoginInput = mockObject(loginInputSchema, {
  username: 'testuser',
});
const loginResult: Login = mockObject(loginschema);
const mockUser = mockObject(userSchema, {
  username: 'testuser',
  id: '1',
});
const createAuthDto: AuthCreateInput = mockObject(authCreateSchema);
const updateAuthDto: AuthUpdateInput = mockObject(authUpdateSchema);
const authList: Auth[] = [mockObject(authSchema)];

describe('AuthController', () => {
  let controller: AuthController;
  let authServiceMock: AuthService;

  beforeEach(async () => {
    authServiceMock = mockDeep<AuthService>();

    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [{ provide: AuthService, useValue: authServiceMock }],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('login', () => {
    it('should return login result when credentials are valid', async () => {
      authServiceMock.validateUser = jest.fn().mockResolvedValue(mockUser);
      authServiceMock.login = jest.fn().mockResolvedValue(loginResult);

      const result = await controller.login(loginInput);

      if (result.isOk()) expect(result.value).toEqual(loginResult);
      expect(authServiceMock.login).toHaveBeenCalledWith(loginInput);
    });

    it('should throw Error when credentials are invalid', async () => {
      authServiceMock.validateUser = jest.fn().mockResolvedValue(null);

      const result = await controller.login(loginInput);

      expect(result.isErr()).toBeTruthy();
      if (result.isErr()) expect(result.error).toBeInstanceOf(Error);
    });
  });

  describe('create', () => {
    it('should create a new auth', async () => {
      authServiceMock.create = jest.fn().mockResolvedValue(mockUser);

      const result = await controller.create(createAuthDto);

      if (result.isOk()) expect(result.value).toEqual(mockUser);
      expect(authServiceMock.create).toHaveBeenCalledWith(createAuthDto);
    });

    it('should throw Error if the auth cannot be created', async () => {
      authServiceMock.create = jest.fn().mockRejectedValue(new Error());

      const result = await controller.create(createAuthDto);

      expect(result.isErr()).toBeTruthy();
      if (result.isErr()) expect(result.error).toBeInstanceOf(Error);
    });
  });

  describe('findAll', () => {
    it('should return a list of auths', async () => {
      authServiceMock.findAll = jest.fn().mockResolvedValue(authList);

      const result = await controller.findAll();

      if (result.isOk()) expect(result.value).toEqual(authList);
      expect(authServiceMock.findAll).toHaveBeenCalled();
    });

    it('should throw InternalServerErrorException if the auths cannot be found', async () => {
      authServiceMock.findAll = jest.fn().mockRejectedValue(new Error());

      const result = await controller.findAll();

      expect(result.isErr()).toBeTruthy();
      if (result.isErr()) expect(result.error).toBeInstanceOf(Error);
    });
  });

  describe('findOne', () => {
    it('should return a single auth', async () => {
      const id = '1';
      authServiceMock.findOne = jest.fn().mockResolvedValue(mockUser);
      const result = await controller.findOne(id);

      if (result.isOk()) expect(result.value).toEqual(mockUser);

      expect(authServiceMock.findOne).toHaveBeenCalledWith(id);
    });
  });

  describe('update', () => {
    it('should update an existing auth', async () => {
      const id = '1';
      authServiceMock.update = jest.fn().mockResolvedValue(mockUser);

      const result = await controller.update(id, updateAuthDto);

      if (result.isOk()) expect(result).toEqual(mockUser);
      expect(authServiceMock.update).toHaveBeenCalledWith(id, updateAuthDto);
    });
  });

  describe('remove', () => {
    it('should remove an existing auth', async () => {
      const id = '1';
      authServiceMock.remove = jest.fn().mockResolvedValue(mockUser);
      const result = await controller.remove(id);

      if (result.isOk()) expect(result.value).toEqual(mockUser);
      expect(authServiceMock.remove).toHaveBeenCalledWith(id);
    });
  });
});
