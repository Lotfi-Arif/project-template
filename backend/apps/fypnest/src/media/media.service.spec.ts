// // media.service.spec.ts
// import { Test, TestingModule } from '@nestjs/testing';
// import { MediaService } from './media.service';
// import { PrismaService } from '../prisma/prisma.service';
// import { MediaType } from '@prisma/client';
// import { Express } from 'express';

// jest.mock('../prisma/prisma.service');

// const prismaMockFactory = () => ({
//   media: {
//     create: jest.fn(),
//     findUnique: jest.fn(),
//     findMany: jest.fn(),
//     delete: jest.fn(),
//   },
// });

// const sampleFile: Express.Multer.File = {
//   fieldname: 'file',
//   originalname: 'sample.jpg',
//   filename: 'sample.jpg',
//   path: 'uploads/sample.jpg',
//   encoding: '7bit',
//   stream: null,
//   mimetype: 'image/jpeg',
//   destination: 'uploads',
//   buffer: Buffer.from('sample buffer'),
//   size: 1024,
// };

// describe('MediaService', () => {
//   let service: MediaService;
//   let prisma: PrismaService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         MediaService,
//         { provide: PrismaService, useFactory: prismaMockFactory },
//       ],
//     }).compile();

//     service = module.get<MediaService>(MediaService);
//     prisma = module.get<PrismaService>(PrismaService);
//   });

//   afterEach(() => {
//     jest.resetAllMocks();
//   });

//   it('should be defined', () => {
//     expect(service).toBeDefined();
//   });

//   describe('createMediaFromFile', () => {
//     it('should create a new media record from a file', async () => {
//       const expectedResult = {
//         id: 'test-id',
//         type: MediaType.IMAGE,
//         course: {
//           connect: {
//             id: 'test-course-id',
//           },
//         },
//         url: '/media/test-id',
//         courseId: 'test-course-id',
//         chatId: 'test-chat-id',
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       };

//       jest.spyOn(prisma.media, 'create').mockResolvedValue(expectedResult);

//       const result = await service.createMediaFromFile(sampleFile);

//       console.log(prisma.media.create);

//       expect(result).toEqual(expectedResult);
//       // expect(prisma.media.create).toHaveBeenCalledWith({
//       //   data: {
//       //     id: expect.any(String),
//       //     type: 'IMAGE',
//       //     url: expect.any(String),
//       //     courseId: 'test-course-id',
//       //     course: {
//       //       connect: {
//       //         id: 'file',
//       //       },
//       //     },
//       //     chatId: 'test-chat-id',
//       //     createdAt: expect.any(Date),
//       //     updatedAt: expect.any(Date),
//       //   },
//       // });
//     });

//     it('should throw an error if media type is not supported', async () => {
//       const unsupportedFile = { ...sampleFile, mimetype: 'unsupported/type' };

//       await expect(
//         service.createMediaFromFile(unsupportedFile),
//       ).rejects.toThrowError('Unsupported media type: unsupported/type');
//     });
//   });

//   // Add more test cases for other methods in the service
// });
