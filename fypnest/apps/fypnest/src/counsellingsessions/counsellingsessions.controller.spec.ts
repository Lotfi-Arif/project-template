import { Test, TestingModule } from '@nestjs/testing';
import { CounsellingsessionsController } from './counsellingsessions.controller';
import { CounsellingsessionsService } from './counsellingsessions.service';

describe('CounsellingsessionsController', () => {
  let controller: CounsellingsessionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CounsellingsessionsController],
      providers: [CounsellingsessionsService],
    }).compile();

    controller = module.get<CounsellingsessionsController>(CounsellingsessionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
