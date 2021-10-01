import { PickType } from '@nestjs/swagger';
import { Recipe } from '../recipe.schema';

export class RecipeRequestDto extends PickType(Recipe, [
  'title',
  'share',
  'view',
  'likes',
  'contents',
  'pictures',
  'star',
  'ingredients',
  'nutrition',
  'author',
]) {}
