import { Comments } from './comments.schema';
import { CommentsCreateDto } from './dto/comments.create.dto';
import { InjectModel } from '@nestjs/mongoose';
import { BadRequestException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { RecipeRepository } from 'src/recipe/recipe.repository';
import { UsersRepository } from 'src/users/users.repository';
import { CommentsRepository } from './comments.repository';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comments.name) private readonly commentsModel: Model<Comments>,
    private readonly recipeRepository: RecipeRepository,
    private readonly usersRepository: UsersRepository,
  ) {}

  async createComment(id: string, commentData: CommentsCreateDto) {
    try {
      return await this.commentsModel.create(commentData);
    } catch (error) {
      console.warn(error);
    }
  }

  async saveComment(id: string, commentData: CommentsCreateDto) {
    try {
      const target = await this.recipeRepository.findById(id);
      const { author, contents } = commentData;
      const validateAuthor =
        await this.usersRepository.findUserByIdWithoutPassword(author);
      const newComment = new this.commentsModel({
        //* 작성자 id
        author: validateAuthor.id,
        // * 작성자 이름
        name: validateAuthor.nickname,
        // * 댓글 내용
        contents,
        // * 댓글을 달 글
        info: target._id,
      });
      return await newComment.save();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findComment(id: string) {
    try {
      return this.commentsModel.findById(id);
    } catch (error) {
      console.warn(error);
    }
  }

  async deleteComment(id: string) {
    try {
      return this.commentsModel.findByIdAndDelete(id);
    } catch (error) {
      console.warn(error);
    }
  }
}
