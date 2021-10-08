import { Test, TestingModule } from '@nestjs/testing';

import { CalculatorsController } from './calculators.controller';
import { CalculatorsService } from './calculators.service';

describe('CalculatorsController', () => {
  let controller: CalculatorsController;
  let service: CalculatorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalculatorsService],
      controllers: [CalculatorsController],
    }).compile();

    service = await module.get<CalculatorsService>(CalculatorsService);
    controller = await module.get<CalculatorsController>(CalculatorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
