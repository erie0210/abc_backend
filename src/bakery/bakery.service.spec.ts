import { Test, TestingModule } from '@nestjs/testing';

import { Bakery } from './bakery.schema';
import { BakeryRepository } from './bakery.repository';
import { BakeryService } from './bakery.service';
import { getModelToken } from '@nestjs/mongoose';

const bakery: Bakery[] = [];

describe('BakeryService', () => {
  let service: BakeryService;
  let repository: BakeryRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BakeryService,
        BakeryRepository,
        {
          provide: getModelToken(Bakery.name),
          useFactory: () => {},
        },
      ],
    }).compile();

    repository = await module.get<BakeryRepository>(BakeryRepository);
    service = await module.get<BakeryService>(BakeryService);
  });

  describe('베이커리 정보 가져오기', () => {
    it('service가 정의되어있다.', () => {
      expect(service).toBeDefined();
    });
    it('repository가 정의되어있다.', () => {
      expect(repository).toBeDefined();
    });
    it('10 개 가져오기', async () => {
      jest
        .spyOn(repository, 'findAll') // * repository 함수 mocking
        .mockResolvedValue(Promise.resolve(bakery));

      const result = await service.getAllBakery(1);

      expect(result).toBeInstanceOf(Array);
    });
  });
});
