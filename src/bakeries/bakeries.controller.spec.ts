import { Test, TestingModule } from '@nestjs/testing';
import { BakeriesController } from './bakeries.controller';

describe('BakeriesController', () => {
  let controller: BakeriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BakeriesController],
    }).compile();

    controller = module.get<BakeriesController>(BakeriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
