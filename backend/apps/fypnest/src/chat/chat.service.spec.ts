import { Test, TestingModule } from '@nestjs/testing';
import { ChatService } from './chat.service';
import { PrismaService } from '../prisma/prisma.service';
import { ChatCreateInput } from '@app/prisma-generated/generated/nestgraphql/chat/chat-create.input';
import { Chat } from '@app/prisma-generated/generated/nestgraphql/chat/chat.model';

describe('ChatService', () => {
  let chatService: ChatService;
  let prismaService: PrismaService;

  const mockChat: Chat = {
    id: '1',
    userId1: 'user-id-1',
    userId2: 'user-id-2',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  beforeEach(async () => {
    const mockPrismaService = {
      chat: {
        create: jest.fn().mockResolvedValue(mockChat),
        findUnique: jest.fn().mockResolvedValue(mockChat),
        delete: jest.fn().mockResolvedValue(mockChat),
        findMany: jest.fn().mockResolvedValue([mockChat]),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ChatService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    chatService = module.get<ChatService>(ChatService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(chatService).toBeDefined();
  });

  describe('createChat', () => {
    it('should create a chat and return the created chat', async () => {
      const chatData: ChatCreateInput = {
        user1: {
          connect: { id: 'user-id-1' },
        },
        user2: {
          connect: { id: 'user-id-2' },
        },
      };

      const chat = await chatService.createChat(chatData);
      expect(chat).toEqual(mockChat);
      expect(prismaService.chat.create).toHaveBeenCalledWith({
        data: chatData,
      });
    });
  });

  describe('getChatById', () => {
    it('should return a chat with the given id', async () => {
      const chatId = '1';

      const chat = await chatService.getChatById(chatId);
      expect(chat).toEqual(mockChat);
      expect(prismaService.chat.findUnique).toHaveBeenCalledWith({
        where: { id: chatId },
      });
    });
  });

  describe('deleteChat', () => {
    it('should delete a chat and return the deleted chat', async () => {
      const chatId = '1';

      const chat = await chatService.deleteChat(chatId);
      expect(chat).toEqual(mockChat);
      expect(prismaService.chat.delete).toHaveBeenCalledWith({
        where: { id: chatId },
      });
    });
  });

  describe('getChats', () => {
    it('should return a list of chats', async () => {
      const skip = 0;
      const take = 10;

      const chats = await chatService.getChats({ skip, take });
      expect(chats).toEqual([mockChat]);
      expect(prismaService.chat.findMany).toHaveBeenCalledWith({ skip, take });
    });
  });
});
