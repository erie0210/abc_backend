import { Test, TestingModule } from '@nestjs/testing';

import { Bakery } from 'src/bakery/bakery.schema';
import { BakeryRepository } from 'src/bakery/bakery.repository';
import { Comments } from './comments.schema';
import { CommentsRepository } from './comments.repository';
import { CommentsService } from './comments.service';
import { Recipe } from 'src/recipe/recipe.schema';
import { RecipeRepository } from 'src/recipe/recipe.repository';
import { Users } from 'src/users/users.schema';
import { UsersRepository } from 'src/users/users.repository';
import { getModelToken } from '@nestjs/mongoose';

describe('CommentsService', () => {
  let service: CommentsService;
  let repository: CommentsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommentsService,
        CommentsRepository,
        RecipeRepository,
        UsersRepository,
        BakeryRepository,
        {
          provide: getModelToken(Comments.name),
          useFactory: () => {},
        },
        {
          provide: getModelToken(Recipe.name),
          useFactory: () => {},
        },
        {
          provide: getModelToken(Users.name),
          useFactory: () => {},
        },
        {
          provide: getModelToken(Bakery.name),
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
