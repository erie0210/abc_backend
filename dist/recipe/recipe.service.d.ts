import { Recipe } from './recipe.schema';
import { RecipeRepository } from './recipe.repository';
import { RecipeRequestDto } from './dto/recipe.request.dto';
export declare class RecipeService {
    private readonly recipeRepository;
    constructor(recipeRepository: RecipeRepository);
    publicRecipe(page: number, sort: string): Promise<Recipe[]>;
    privateRecipe(category: string, userId: string, page: number): Promise<Recipe[]>;
    searchRecipe(keyword: string, page: number, sort: string): Promise<Recipe[]>;
    getRecipe(id: string): Promise<Recipe>;
    createRecipe(body: RecipeRequestDto): Promise<Recipe>;
    updateRecipe(id: any, data: any): Promise<Recipe>;
    deleteRecipe(id: string): Promise<Recipe>;
    plusLike(id: string): Promise<Recipe>;
    minusLike(id: string): Promise<Recipe>;
}
