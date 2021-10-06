import { Test, TestingModule } from '@nestjs/testing';
import { BakeryController } from './bakery.controller';

describe('BakeryController', () => {
  let controller: BakeryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BakeryController],
    }).compile();

    controller = module.get<BakeryController>(BakeryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
