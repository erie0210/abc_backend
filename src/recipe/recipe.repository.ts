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
    try {
      return await this.recipeModel
        .findById(id)
        .populate('comments', CommentsModel);
    } catch (error) {
      throw new Error('error findById in recipe.repository.ts');
    }
  }

  async findByUser(sort: string, userId: string, page: number) {
    const CommentsModel = mongoose.model('comments', CommentsSchema);

    if (page < 1) {
      throw new Error('page should be positive integer');
    }

    try {
      const sortBy = new Object();
      sortBy[sort] = 'desc';
      return await this.recipeModel
        .find({ author: userId })
        .sort([[sort, -1]])
        .sort([['createdAt', 1]])
        .limit(12 * page)
        .populate('comments', CommentsModel);
    } catch (error) {
      throw new Error('error findByUser in recipe.repository.ts');
    }
  }

  async findByKeyword(keyword: string, page: number, sort: string) {
    const CommentsModel = mongoose.model('comments', CommentsSchema);

    const sortBy = new Object();
    sortBy[sort] = 'asc';

    if (page < 1) {
      throw new Error('page should be positive integer');
    }
    try {
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
    } catch (error) {
      throw new Error('error findByKeyword in recipe.repository.ts');
    }
  }

  async create(recipe: RecipeRequestDto): Promise<Recipe> {
    try {
      return await this.recipeModel.create(recipe);
    } catch (error) {
      throw new Error('error create in recipe.repository.ts');
    }
  }

  async update(id: string, data): Promise<Recipe> {
    try {
      return await this.recipeModel.findByIdAndUpdate(id, data);
    } catch (error) {
      throw new Error('error update in recipe.repository.ts');
    }
  }

  async delete(id: string) {
    try {
      return await this.recipeModel.findByIdAndDelete(id);
    } catch (error) {
      throw new Error('error delete in recipe.repository.ts');
    }
  }
}
