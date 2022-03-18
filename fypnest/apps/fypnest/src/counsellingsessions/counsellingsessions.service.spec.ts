import { Test, TestingModule } from '@nestjs/testing';
import { CounsellingsessionsService } from './counsellingsessions.service';

describe('CounsellingsessionsService', () => {
  let service: CounsellingsessionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CounsellingsessionsService],
    }).compile();

    service = module.get<CounsellingsessionsService>(CounsellingsessionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
