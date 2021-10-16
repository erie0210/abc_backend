// import { Recipe, RecipeType } from './model';

import { Request, Response } from 'express';

import { Error } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Recipe } from './recipe.schema';
import { RecipeDto } from './dto/recipe.dto';
import { RecipeRepository } from './recipe.repository';
import { RecipeRequestDto } from './dto/recipe.request.dto';

@Injectable()
export class RecipeService {
  constructor(private readonly recipeRepository: RecipeRepository) {}

  //* public한 모든 recipes
  async publicRecipe(page: number, sort: string) {
    try {
      return await this.recipeRepository.findPublic(page, sort);
    } catch (error) {
      throw error;
    }
  }

  //* 특정 user의 모든 recipes
  async privateRecipe(category: string, userId: string, page: number) {
    try {
      return await this.recipeRepository.findByUser(category, userId, page);
    } catch (error) {
      throw error;
    }
  }

  //* recipe 검색
  async searchRecipe(keyword: string, page: number, sort: string) {
    try {
      return await this.recipeRepository.findByKeyword(keyword, page, sort);
    } catch (error) {
      throw error;
    }
  }

  //* GET 특정 recipe 리턴
  async getRecipe(id: string) {
    try {
      return await this.recipeRepository.findById(id);
    } catch (error) {
      throw error;
    }
  }

  //* POST CREATE 새로운 레시피 추가 (저장하기)
  async createRecipe(body: RecipeRequestDto) {
    try {
      const {
        title,
        share,
        view,
        likes,
        contents,
        pictures,
        star,
        ingredients,
        nutrition,
        author,
      } = body;

      const recipe = await this.recipeRepository.create({
        title,
        share,
        view,
        likes,
        contents,
        pictures,
        star,
        ingredients,
        nutrition,
        author,
      });

      return recipe;
    } catch (error) {
      throw error;
    }
  }

  //* POST UPDATE 레시피 업데이트
  async updateRecipe(id, data) {
    try {
      const res = await this.recipeRepository.update(id, data);
      return res;
    } catch (error) {
      throw error;
    }
  }

  //* POST DELETE 레시피 삭제
  async deleteRecipe(id: string) {
    try {
      return await this.recipeRepository.delete(id);
    } catch (error) {
      throw error;
    }
  }

  // * 좋아요 증가
  async plusLike(id: string) {
    try {
      const recipe = await this.recipeRepository.findById(id);
      if (recipe) {
        recipe.likes += 1;
        return await recipe.save();
      }
    } catch (error) {
      throw error;
    }
  }

  // * 좋아요 감소
  async minusLike(id: string) {
    try {
      const recipe = await this.recipeRepository.findById(id);
      if (recipe) {
        recipe.likes -= 1;
        return await recipe.save();
      }
    } catch (error) {
      throw error;
    }
  }
}
