import { Test, TestingModule } from '@nestjs/testing';

import { Comments } from './comments.schema';
import { CommentsRepository } from './comments.repository';
import { CommentsService } from './comments.service';
import { getModelToken } from '@nestjs/mongoose';

describe('CommentsService', () => {
  let service: CommentsService;
  let repository: CommentsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommentsService,
        CommentsRepository,
        {
          provide: getModelToken(Comments.name),
          useFactory: () => {},
        },
      ],
    }).compile();

    repository = await module.get<CommentsRepository>(CommentsRepository);
    service = await module.get<CommentsService>(CommentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
