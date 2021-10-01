import { Request, Response } from 'express';
export declare class RecipeService {
    hiRecipeServiceProduct(): string;
}
export declare const publicRecipe: (req: Request, res: Response) => void;
export declare const privateRecipe: (req: Request, res: Response) => void;
export declare const getRecipe: (req: Request, res: Response) => void;
export declare const createRecipe: (req: Request, res: Response) => void;
export declare const updateRecipe: (req: Request, res: Response) => void;
export declare const deleteRecipe: (req: Request, res: Response) => void;
