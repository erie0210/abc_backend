import { Test, TestingModule } from '@nestjs/testing';
import { CalculatorsController } from './calculators.controller';

describe('CalculatorsController', () => {
  let controller: CalculatorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalculatorsController],
    }).compile();

    controller = module.get<CalculatorsController>(CalculatorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
