import { Likes } from '../likes.schema';
import { PickType } from '@nestjs/swagger';

export class LikesDto extends PickType(Likes, ['userId', 'postId']) {}
