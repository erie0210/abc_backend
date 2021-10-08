import { Test, TestingModule } from '@nestjs/testing';

import { Bakery } from 'src/bakery/bakery.schema';
import { BakeryRepository } from 'src/bakery/bakery.repository';
import { Comments } from './comments.schema';
import { CommentsController } from './comments.controller';
import { CommentsRepository } from './comments.repository';
import { CommentsService } from './comments.service';
import { Recipe } from 'src/recipe/recipe.schema';
import { RecipeRepository } from 'src/recipe/recipe.repository';
import { Users } from 'src/users/users.schema';
import { UsersRepository } from 'src/users/users.repository';
import { getModelToken } from '@nestjs/mongoose';

describe('CommentsController', () => {
  let controller: CommentsController;
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
      controllers: [CommentsController],
    }).compile();

    repository = await module.get<CommentsRepository>(CommentsRepository);
    service = await module.get<CommentsService>(CommentsService);
    controller = module.get<CommentsController>(CommentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
