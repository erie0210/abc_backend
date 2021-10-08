import { Comments, CommentsSchema } from 'src/comments/comments.schema';
import { Recipe, RecipeSchema } from './recipe.schema';
import { UserSchema, Users } from 'src/users/users.schema';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecipeRepository } from './recipe.repository';
import { RecipeService } from './recipe.service';
import { RecipesController } from './recipe.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Recipe.name, schema: RecipeSchema },
      { name: Comments.name, schema: CommentsSchema },
    ]),
  ],
  controllers: [RecipesController],
  providers: [RecipeService, RecipeRepository],
  exports: [RecipeService, RecipeRepository],
})
export class RecipeModule {}
