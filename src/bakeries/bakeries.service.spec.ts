import { Test, TestingModule } from '@nestjs/testing';
import { BakeriesService } from './bakeries.service';

describe('BakeriesService', () => {
  let service: BakeriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BakeriesService],
    }).compile();

    service = module.get<BakeriesService>(BakeriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
