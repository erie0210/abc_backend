import { Test, TestingModule } from '@nestjs/testing';

import { Recipe } from './recipe.schema';
import { RecipeRepository } from './recipe.repository';
import { RecipeService } from './recipe.service';
import { RecipesController } from './recipe.controller';
import { getModelToken } from '@nestjs/mongoose';

const recipe: Recipe[] = [];

describe('레시피 서비스 테스트', () => {
  let service: RecipeService;
  let repository: RecipeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RecipeService,
        RecipeRepository,
        {
          provide: getModelToken(Recipe.name),
          useFactory: () => {},
        },
      ],
    }).compile();

    service = await module.get<RecipeService>(RecipeService);
    repository = await module.get<RecipeRepository>(RecipeRepository);
  });

  it('should be defined', async () => {
    expect(service).toBeDefined();
  });
});
