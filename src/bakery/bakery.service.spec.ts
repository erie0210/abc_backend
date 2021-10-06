import { Test, TestingModule } from '@nestjs/testing';
import { BakeryService } from './bakery.service';

describe('BakeryService', () => {
  let service: BakeryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BakeryService],
    }).compile();

    service = module.get<BakeryService>(BakeryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
