import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { mockDeep } from 'jest-mock-extended';
import { UnauthorizedException } from '@nestjs/common';

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
      const loginInput = { username: 'testuser', password: 'password' };
      const loginResult = { access_token: 'token', token_type: 'Bearer' };

      authServiceMock.validateUser = jest.fn().mockResolvedValue({
        id: '1',
        username: 'testuser',
        email: 'test@example.com',
        // other user fields
      });
      authServiceMock.login = jest.fn().mockResolvedValue(loginResult);

      const result = await controller.login(loginInput);
      expect(result).toEqual(loginResult);
    });

    it('should throw UnauthorizedException when credentials are invalid', async () => {
      const loginInput = { username: 'testuser', password: 'wrongpassword' };
      authServiceMock.validateUser = jest.fn().mockResolvedValue(null);

      await expect(controller.login(loginInput)).rejects.toThrow(
        UnauthorizedException,
      );
    });
  });

  //TODO: Add more tests for other methods like create, findAll, etc.
});
