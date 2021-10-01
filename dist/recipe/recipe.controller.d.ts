import { RecipeService } from './recipe.service';
import { RecipeRequestDto } from './dto/recipe.request.dto';
export declare class RecipesController {
    private readonly recipeService;
    private logger;
    constructor(recipeService: RecipeService);
    getPublicRecipe(page: any, sort: any): Promise<import("./recipe.schema").Recipe[]>;
    search(body: any): Promise<import("./recipe.schema").Recipe[]>;
    getPrivateCacheRecipe(userId: any): Promise<{}>;
    getPrivateRecipe(category: any, userId: any, page: any): Promise<import("./recipe.schema").Recipe[]>;
    getOneRecipe(id: any): Promise<import("./recipe.schema").Recipe>;
    createRecipe(data: RecipeRequestDto): Promise<import("./recipe.schema").Recipe>;
    updateRecipe(id: any, data: any): Promise<import("./recipe.schema").Recipe>;
    deleteRecipe(param: any): Promise<import("./recipe.schema").Recipe>;
    plusLike(id: string): Promise<import("./recipe.schema").Recipe>;
    minusLike(id: string): Promise<import("./recipe.schema").Recipe>;
}
