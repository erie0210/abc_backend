import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LikesDto } from './dto/likes.dto';
import { Likes } from './likes.schema';

@Injectable()
export class LikesRepository {
  constructor(
    @InjectModel(Likes.name) private readonly likesModel: Model<Likes>,
  ) {}

  async plusLike(like: LikesDto) {
    try {
      return await this.likesModel.create(like);
    } catch (error) {
      console.warn(error);
    }
  }

  async minusLike(like: LikesDto) {
    try {
      const { userId, postId } = like;
      return await this.likesModel.findOneAndDelete({
        userId: userId,
        postId: postId,
      });
    } catch (error) {
      console.warn(error);
    }
  }

  async getLike(like: LikesDto) {
    try {
      const { userId, postId } = like;
      return await this.likesModel.find({
        postId: postId,
      });
    } catch (error) {
      console.warn(error);
    }
  }
}
