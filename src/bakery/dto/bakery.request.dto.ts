import { Bakery } from '../bakery.schema';
import { PickType } from '@nestjs/swagger';

export class BakeryRequestDto extends PickType(Bakery, [
  'title',
  'body',
  'picture',
  'author',
]) {}
