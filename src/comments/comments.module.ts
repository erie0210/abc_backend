import { Comments, CommentsSchema } from './comments.schema';
import { Recipe, RecipeSchema } from 'src/recipe/recipe.schema';
import { UserSchema, Users } from 'src/users/users.schema';

import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecipeModule } from 'src/recipe/recipe.modules';
import { RecipeRepository } from 'src/recipe/recipe.repository';
import { UserModule } from 'src/users/users.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Comments.name, schema: CommentsSchema },
      { name: Recipe.name, schema: RecipeSchema },
      { name: Users.name, schema: UserSchema },
    ]),
    RecipeModule,
    UserModule,
  ],
  controllers: [CommentsController],
  providers: [CommentsService, RecipeRepository],
  exports: [CommentsService, RecipeRepository],
})
export class CommentsModule {}
