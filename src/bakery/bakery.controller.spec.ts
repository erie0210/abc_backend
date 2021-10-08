import { Test, TestingModule } from '@nestjs/testing';

import { Bakery } from './bakery.schema';
import { BakeryController } from './bakery.controller';
import { BakeryRepository } from './bakery.repository';
import { BakeryService } from './bakery.service';
import { getModelToken } from '@nestjs/mongoose';

describe('BakeryController', () => {
  let controller: BakeryController;
  let service: BakeryService;
  let repository: BakeryRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BakeryService,
        BakeryRepository,
        { provide: getModelToken(Bakery.name), useFactory: () => {} },
      ],
      controllers: [BakeryController],
    }).compile();

    repository = await module.get<BakeryRepository>(BakeryRepository);
    service = await module.get<BakeryService>(BakeryService);
    controller = await module.get<BakeryController>(BakeryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
