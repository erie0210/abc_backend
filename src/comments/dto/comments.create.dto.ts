import { Comments } from '../comments.schema';
import { PickType } from '@nestjs/swagger';

export class CommentsCreateDto extends PickType(Comments, [
  'author',
  'contents',
] as const) {}
