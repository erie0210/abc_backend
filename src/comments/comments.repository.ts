import { Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Comments } from './comments.schema';

export class CommentsRepository {
  constructor(
    @Inject(Comments.name) private readonly commentsModel: Model<Comments>,
  ) {}

  // async findComment(id: string) {
  //   return await this.commentsModel.findById(id);
  // }
}
