import { Test, TestingModule } from '@nestjs/testing';
import { ChatResolver } from './chat.resolver';
import { ChatService } from './chat.service';
import { Chat } from '@app/prisma-generated/generated/nestgraphql/chat/chat.model';
import { Prisma } from '@prisma/client';

describe('ChatResolver', () => {
  let chatResolver: ChatResolver;
  let chatService: ChatService;

  const mockChat: Chat = {
    id: '1',
    userId1: 'user-id-1',
    userId2: 'user-id-2',
    user1: {
      id: 'user-id-1',
      email: 'user1@example.com',
      password: 'hashedpassword',
      firstName: 'User',
      lastName: 'One',
      role: 'STUDENT',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    user2: {
      id: 'user-id-2',
      email: 'user2@example.com',
      password: 'hashedpassword',
      firstName: 'User',
      lastName: 'Two',
      role: 'STUDENT',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    messages: [],
    media: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  beforeEach(async () => {
    const mockChatService = {
      getChats: jest.fn().mockResolvedValue([mockChat]),
      getChatById: jest.fn().mockResolvedValue(mockChat),
      createChat: jest.fn().mockResolvedValue(mockChat),
      deleteChat: jest.fn().mockResolvedValue(mockChat),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ChatResolver,
        {
          provide: ChatService,
          useValue: mockChatService,
        },
      ],
    }).compile();

    chatResolver = module.get<ChatResolver>(ChatResolver);
    chatService = module.get<ChatService>(ChatService);
  });

  it('should be defined', () => {
    expect(chatResolver).toBeDefined();
  });

  describe('chats', () => {
    it('should return a list of chats', async () => {
      const skip = 0;
      const take = 10;

      const chats = await chatResolver.chats(skip, take);
      expect(chats).toEqual([mockChat]);
      expect(chatService.getChats).toHaveBeenCalledWith({ skip, take });
    });
  });

  describe('chat', () => {
    it('should return a chat with the given id', async () => {
      const chatId = '1';

      const chat = await chatResolver.chat(chatId);
      expect(chat).toEqual(mockChat);
      expect(chatService.getChatById).toHaveBeenCalledWith(chatId);
    });
  });

  describe('createChat', () => {
    it('should create a chat and return the created chat', async () => {
      const chatData: Prisma.ChatCreateInput = {
        user1: {
          connect: {
            id: 'user-id-1',
          },
        },
        user2: {
          connect: {
            id: 'user-id-2',
          },
        },
      };

      const chat = await chatResolver.createChat(chatData);
      expect(chat).toEqual(mockChat);
      expect(chatService.createChat).toHaveBeenCalledWith(chatData);
    });
  });

  describe('deleteChat', () => {
    it('should delete a chat and return the deleted chat', async () => {
      const chatId = '1';

      const chat = await chatResolver.deleteChat(chatId);
      expect(chat).toEqual(mockChat);
      expect(chatService.deleteChat).toHaveBeenCalledWith(chatId);
    });
  });
});
