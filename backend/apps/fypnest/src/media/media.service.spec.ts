// media.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { MediaService } from './media.service';
import { PrismaService } from '../prisma/prisma.service';
import { MediaType } from '@prisma/client';
import { Media } from '@app/prisma-generated/generated/nestgraphql/media/media.model';

jest.mock('../prisma/prisma.service');

const sampleMedia: Media = {
  id: 'test-media-id',
  type: MediaType.IMAGE,
  url: '/media/test-media-id',
  courseId: 'test-course-id',
  chatId: 'test-chat-id',
  createdAt: new Date(),
  updatedAt: new Date(),
};

const prismaMockFactory = () => ({
  media: {
    create: jest.fn(() => Promise.resolve(sampleMedia)),
    findUnique: jest.fn(() => Promise.resolve(sampleMedia)),
    delete: jest.fn(() => Promise.resolve(sampleMedia)),
    findMany: jest.fn(() => Promise.resolve([sampleMedia])),
  },
});

describe('MediaService', () => {
  let service: MediaService;
  // let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MediaService,
        { provide: PrismaService, useFactory: prismaMockFactory },
      ],
    }).compile();

    service = module.get<MediaService>(MediaService);
    // prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create media from file', async () => {
    const file = {
      fieldname: 'test-course-id',
      originalname: 'test-image.jpg',
      encoding: '7bit',
      mimetype: 'image/jpeg',
      buffer: Buffer.from([0xff, 0xd8, 0xff]),
      size: 3,
    };

    const media = await service.createMediaFromFile(file as any);
    expect(media).toEqual(sampleMedia);
  });

  it('should get media by id', async () => {
    const media = await service.getMediaById('test-media-id');
    expect(media).toEqual(sampleMedia);
  });

  // it('should get media content by id', async () => {
  //   jest
  //     .spyOn(service, 'getMediaById')
  //     .mockImplementation(() => Promise.resolve(sampleMedia));

  //   const mediaContent = await service.getMediaContent('test-media-id');
  //   expect(mediaContent).toBeInstanceOf(Buffer);
  // });

  it('should delete media by id', async () => {
    const deletedMedia = await service.deleteMedia('test-media-id');
    expect(deletedMedia).toEqual(sampleMedia);
  });

  it('should get medias with pagination', async () => {
    const medias = await service.getMedias({ skip: 0, take: 10 });
    expect(medias).toEqual([sampleMedia]);
  });
});
