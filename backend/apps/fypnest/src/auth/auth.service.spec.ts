// import { Test, TestingModule } from '@nestjs/testing';
// import { AuthService } from './auth.service';
// import { PrismaService } from '../prisma/prisma.service';
// import { JwtService } from '@nestjs/jwt';
// import * as bcrypt from 'bcrypt';
// import { v4 as uuid } from 'uuid';
// import { ConflictException } from '@nestjs/common';

// describe('AuthService', () => {
//   let authService: AuthService;
//   let prismaService: PrismaService;

//   const mockAuth = {
//     userId: '1',
//     email: 'test@example.com',
//     password: 'hashed_password',
//     refreshToken: 'hashed_refresh_token',
//   };

//   const mockRefreshToken = 'refresh_token';

//   beforeEach(async () => {
//     const mockPrismaService = {
//       auth: {
//         findUnique: jest.fn().mockResolvedValue(null),
//         create: jest.fn().mockResolvedValue({
//           auth: mockAuth,
//           refreshToken: mockRefreshToken, // unhashed refresh token
//         }),
//       },
//       user: {
//         create: jest.fn().mockResolvedValue({
//           auth: mockAuth,
//         }),
//       },
//     };

//     const mockJwtService = {
//       sign: jest.fn().mockReturnValue('jwt_token'),
//     };

//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         AuthService,
//         {
//           provide: PrismaService,
//           useValue: mockPrismaService,
//         },
//         {
//           provide: JwtService,
//           useValue: mockJwtService,
//         },
//       ],
//     }).compile();

//     authService = module.get<AuthService>(AuthService);
//     prismaService = module.get<PrismaService>(PrismaService);

//     // Mock bcrypt and uuid
//     jest.spyOn(bcrypt, 'hash').mockResolvedValue('hashed_value');
//     jest.spyOn(uuid, 'v4').mockReturnValue(mockRefreshToken);
//   });

//   it('should be defined', () => {
//     expect(authService).toBeDefined();
//   });

//   describe('register', () => {
//     it('should successfully register a new user and return auth with refreshToken', async () => {
//       const authCreateInput = {
//         email: 'newuser@example.com',
//         password: 'password',
//         refreshToken: '123',
//         user: {
//           create: {
//             firstName: '123',
//             lastName: '123',
//           },
//         },
//       };

//       const result = await authService.register(authCreateInput);

//       expect(prismaService.auth.findUnique).toHaveBeenCalledWith({
//         where: { email: authCreateInput.email },
//       });
//       expect(prismaService.user.create).toHaveBeenCalled();
//       expect(result).toEqual({
//         user: mockAuth,
//         refreshToken: mockRefreshToken,
//       });
//     });

//     it('should throw ConflictException if email is already in use', async () => {
//       prismaService.auth.findUnique.mockResolvedValueOnce(mockAuth);

//       await expect(
//         authService.register({
//           email: 'newuser@example.com',
//           password: 'password',
//           refreshToken: '123',
//           user: {
//             create: {
//               firstName: '123',
//               lastName: '123',
//             },
//           },
//         }),
//       ).rejects.toThrow(ConflictException);
//     });
//   });
// });
