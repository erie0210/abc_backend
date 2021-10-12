import { Test, TestingModule } from '@nestjs/testing';

import { Recipe } from './recipe.schema';
import { RecipesController } from './recipe.controller';
import { RecipeRepository } from './recipe.repository';
import { RecipeService } from './recipe.service';
import { getModelToken } from '@nestjs/mongoose';

describe('RecipeController', () => {
  let controller: RecipesController;
  let service: RecipeService;
  let repository: RecipeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RecipeService,
        RecipeRepository,
        { provide: getModelToken(Recipe.name), useFactory: () => {} },
      ],
      controllers: [RecipesController],
    }).compile();

    repository = await module.get<RecipeRepository>(RecipeRepository);
    service = await module.get<RecipeService>(RecipeService);
    controller = await module.get<RecipesController>(RecipesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
