import { Recipe, RecipeType } from './model';
import { Request, Response } from 'express';

import { Injectable } from '@nestjs/common';

@Injectable()
export class RecipeService {
  hiRecipeServiceProduct() {
    return 'hello recipe';
  }
}

/**
 * GET 모든 공개 recipes
 */
export const publicRecipe = (req: Request, res: Response) => {
  try {
    const recipes = Recipe;
    // findAll where public is true
    res.status(200).send({
      success: true,
      data: {
        recipes,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error,
    });
  }
};

/**
 * GET 나의 recipes
 */
export const privateRecipe = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const recipes = Recipe;
    // findAll where recipe.id===params.id(authorId)
    res.status(200).send({
      success: true,
      data: {
        recipes,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error,
    });
  }
};

/**
 * GET 특정 recipe 리턴
 */
export const getRecipe = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const recipe = Recipe.find((recipe) => {
      return recipe.id === parseInt(params.id);
    });
    res.status(200).send({
      success: true,
      data: {
        recipe,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error,
    });
  }
};

/**
 * POST CREATE 새로운 레시피 추가 (저장하기)
 */
export const createRecipe = (req: Request, res: Response) => {
  try {
    const data = req.body;
    Recipe.push(data);
    res.status(200).send({
      success: true,
      data: { data },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error,
    });
  }
};

/**
 * POST UPDATE 레시피 업데이트
 */
export const updateRecipe = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;

    Recipe.forEach((recipe) => {
      if (recipe.id === parseInt(params.id)) {
        recipe = body;
        result = recipe;
      }
    });
    res.status(200).send({
      success: true,
      data: { recipe: result },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error,
    });
  }
};

/**
 * POST DELETE 레시피 삭제
 */
export const deleteRecipe = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const newRecipe = Recipe.filter(
      (recipe) => recipe.id !== parseInt(params.id),
    );
    res.status(200).send({
      success: true,
      data: { newRecipe },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error,
    });
  }
};
