import { Test, TestingModule } from '@nestjs/testing';
import { CalculatorsService } from './calculators.service';

describe('CalculatorsService', () => {
  let service: CalculatorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalculatorsService],
    }).compile();

    service = module.get<CalculatorsService>(CalculatorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
