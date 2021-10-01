import { PickType } from '@nestjs/swagger';
import { Recipe } from '../recipe.schema';

export class RecipeDto extends PickType(Recipe, [
  'id',
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
