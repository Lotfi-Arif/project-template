import { Test, TestingModule } from '@nestjs/testing';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { User } from '@app/prisma-generated/generated/nestgraphql/user/user.model';
import { UserCreateInput } from '@app/prisma-generated/generated/nestgraphql/user/user-create.input';

describe('AuthResolver', () => {
  let authResolver: AuthResolver;
  let authService: AuthService;

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
    const mockAuthService = {
      register: jest.fn().mockResolvedValue(mockUser),
      login: jest.fn().mockResolvedValue({ access_token: 'jwt_token' }),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthResolver,
        {
          provide: AuthService,
          useValue: mockAuthService,
        },
      ],
    }).compile();

    authResolver = module.get<AuthResolver>(AuthResolver);
    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(authResolver).toBeDefined();
  });

  describe('register', () => {
    it('should register a user and return the registered user', async () => {
      const userData: UserCreateInput = {
        email: 'test@example.com',
        password: 'password',
        firstName: 'John',
        lastName: 'Doe',
      };

      const user = await authResolver.register(userData);
      expect(user).toEqual(mockUser);
      expect(authService.register).toHaveBeenCalledWith(userData);
    });
  });

  describe('login', () => {
    it('should return an access_token when credentials are valid', async () => {
      const email = 'test@example.com';
      const password = 'password';

      const access_token = await authResolver.login(email, password);
      expect(access_token).toEqual('jwt_token');
      expect(authService.login).toHaveBeenCalledWith(email, password);
    });
  });
});
