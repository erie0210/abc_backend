import { Body, Injectable, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Mongoose } from 'mongoose';
import { Users } from 'src/users/users.schema';
import { UrlWithStringQuery } from 'url';
import { RecipeDto } from './dto/recipe.dto';
import { RecipeRequestDto } from './dto/recipe.request.dto';
import { Recipe } from './recipe.schema';
import * as mongoose from 'mongoose';
import { CommentsSchema } from 'src/comments/comments.schema';

@Injectable()
export class RecipeRepository {
  constructor(
    @InjectModel(Recipe.name) private readonly recipeModel: Model<Recipe>,
  ) {}

  async findPublic(page: number, sort: string) {
    const sortBy = new Object();
    sortBy[sort] = 'asc';

    const CommentsModel = mongoose.model('comments', CommentsSchema);

    if (page < 1) {
      throw new Error('page should be positive integer');
    }
    const res = await this.recipeModel
      .find({ share: true })
      .populate('comments', CommentsModel)
      .limit(10 * page)
      .sort(sortBy);
    return res;
  }

  async findById(id: string) {
    const CommentsModel = mongoose.model('comments', CommentsSchema);
    return await this.recipeModel
      .findById(id)
      .populate('comments', CommentsModel);
  }

  async findByUser(userId: string, page: number, sort: string) {
    const CommentsModel = mongoose.model('comments', CommentsSchema);

    const sortBy = new Object();
    sortBy[sort] = 'desc';
    return await this.recipeModel
      .find({ author: userId })
      .sort([[sort, -1]])
      .sort([['createdAt', 1]])
      .limit(12 * page)
      .populate('comments', CommentsModel);
  }

  async findByKeyword(keyword: string, page: number, sort: string) {
    const CommentsModel = mongoose.model('comments', CommentsSchema);

    const sortBy = new Object();
    sortBy[sort] = 'asc';
    // const res = await this.recipeModel.find({ $text: { $search: keyword } });
    const res = await this.recipeModel
      .find()
      .or([
        { title: new RegExp(keyword) },
        { contents: new RegExp(keyword) },
        { comments: new RegExp(keyword) },
        { ingredients: new RegExp(keyword) },
        { nutrition: new RegExp(keyword) },
      ])
      .limit(12 * page)
      .sort(sortBy)
      .populate('comments', CommentsModel);
    return res;
  }

  async create(recipe: RecipeRequestDto): Promise<Recipe> {
    return await this.recipeModel.create(recipe);
  }

  async update(id: string, data): Promise<Recipe> {
    try {
      return await this.recipeModel.findByIdAndUpdate(id, data);
    } catch (error) {
      console.warn(error);
    }
  }

  async delete(id: string) {
    return await this.recipeModel.findByIdAndDelete(id);
  }
}
