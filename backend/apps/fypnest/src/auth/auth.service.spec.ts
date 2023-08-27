import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'libs/prisma/src/generated/nestgraphql/user/user.model';

describe('AuthService', () => {
  let authService: AuthService;
  let userService: UserService;
  let jwtService: JwtService;

  const mockUser: User = {
    id: '1',
    email: 'test@example.com',
    password: 'password',
    firstName: 'John',
    lastName: 'Doe',
    role: 'STUDENT',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  beforeEach(async () => {
    const mockUserService = {
      createUser: jest.fn().mockResolvedValue(mockUser),
      getUserByEmail: jest.fn().mockResolvedValue(mockUser),
    };

    const mockJwtService = {
      sign: jest.fn().mockReturnValue('jwt_token'),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UserService,
          useValue: mockUserService,
        },
        {
          provide: JwtService,
          useValue: mockJwtService,
        },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    userService = module.get<UserService>(UserService);
    jwtService = module.get<JwtService>(JwtService);
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  describe('register', () => {
    it('should register a user', async () => {
      const userData = {
        email: 'test@example.com',
        password: 'password',
        firstName: 'John',
        lastName: 'Doe',
      };

      const user = await authService.register(userData);
      expect(user).toEqual(mockUser);
      expect(userService.createUser).toHaveBeenCalledWith(userData);
    });
  });

  describe('validateUser', () => {
    it('should return user when credentials are valid', async () => {
      const validUser = await authService.validateUser(
        mockUser.email,
        mockUser.password,
      );
      expect(validUser).toEqual(mockUser);
    });

    it('should return null when credentials are invalid', async () => {
      const invalidUser = await authService.validateUser(
        mockUser.email,
        'wrong_password',
      );
      expect(invalidUser).toBeNull();
    });
  });

  describe('login', () => {
    it('should return access_token when credentials are valid', async () => {
      const token = await authService.login(mockUser.email, mockUser.password);
      expect(token).toEqual({ access_token: 'jwt_token' });
      expect(jwtService.sign).toHaveBeenCalled();
    });

    it('should throw UnauthorizedException when credentials are invalid', async () => {
      await expect(
        authService.login(mockUser.email, 'wrong_password'),
      ).rejects.toThrowError();
    });
  });
});
