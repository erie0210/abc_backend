import { Model } from 'mongoose';
import { RecipeRequestDto } from './dto/recipe.request.dto';
import { Recipe } from './recipe.schema';
export declare class RecipeRepository {
    private readonly recipeModel;
    constructor(recipeModel: Model<Recipe>);
    findPublic(page: number, sort: string): Promise<Recipe[]>;
    findById(id: string): Promise<Recipe>;
    findByUser(userId: string, page: number, sort: string): Promise<Recipe[]>;
    findByKeyword(keyword: string, page: number, sort: string): Promise<Recipe[]>;
    create(recipe: RecipeRequestDto): Promise<Recipe>;
    update(id: string, data: any): Promise<Recipe>;
    delete(id: string): Promise<Recipe>;
}
