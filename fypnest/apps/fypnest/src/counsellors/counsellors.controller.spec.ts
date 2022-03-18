import { Test, TestingModule } from '@nestjs/testing';
import { CounsellorsController } from './counsellors.controller';
import { CounsellorsService } from './counsellors.service';

describe('CounsellorsController', () => {
  let controller: CounsellorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CounsellorsController],
      providers: [CounsellorsService],
    }).compile();

    controller = module.get<CounsellorsController>(CounsellorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
