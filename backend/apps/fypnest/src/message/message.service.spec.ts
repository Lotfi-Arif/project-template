import { Test, TestingModule } from '@nestjs/testing';
import { PrismaClient, Message as MessageModel } from '@prisma/client';
import { MessageService } from './message.service';

const prismaClientMock = {
  message: {
    create: jest.fn(),
  },
  user: {
    create: jest.fn(),
    delete: jest.fn(),
  },
};

describe('MessageService', () => {
  let messageService: MessageService;
  let prismaClient: PrismaClient;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MessageService,
        {
          provide: PrismaClient,
          useValue: prismaClientMock,
        },
      ],
    }).compile();

    messageService = module.get<MessageService>(MessageService);
    prismaClient = module.get<PrismaClient>(PrismaClient);
  });

  afterEach(async () => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(messageService).toBeDefined();
  });

  describe('createMessage', () => {
    it('should create a new message', async () => {
      // Prepare test data
      const content = 'Test message content';
      const senderId = 'test-sender-id';
      const chatId = 'test-chat-id';

      // Mock PrismaClient methods
      (
        prismaClient.message.create as jest.MockedFunction<
          typeof prismaClient.message.create
        >
      ).mockResolvedValue({
        id: 'test-message-id',
        content,
        senderId,
        chatId,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      // Call the createMessage method
      const createdMessage = await messageService.createMessage(
        content,
        senderId,
        chatId,
      );

      // Validate the returned message
      expect(createdMessage).toHaveProperty('id');
      expect(createdMessage.content).toEqual(content);
      expect(createdMessage.senderId).toEqual(senderId);
      expect(createdMessage.chatId).toEqual(chatId);

      // Check if the mocked PrismaClient method was called
      expect(prismaClient.message.create).toHaveBeenCalledTimes(1);
    });
  });

  // Add more tests for other methods, e.g., updateMessage, deleteMessage, getMessages, etc.
});
