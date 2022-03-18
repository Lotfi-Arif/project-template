import { Test, TestingModule } from '@nestjs/testing';
import { CounsellorsService } from './counsellors.service';

describe('CounsellorsService', () => {
  let service: CounsellorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CounsellorsService],
    }).compile();

    service = module.get<CounsellorsService>(CounsellorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
