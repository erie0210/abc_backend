import { AppService } from './app.service';
import { RecipeService } from './recipe/recipe.service';
import { UsersService } from './users/users.service';
export declare class AppController {
    private readonly appService;
    private readonly recipeService;
    private readonly userService;
    constructor(appService: AppService, recipeService: RecipeService, userService: UsersService);
    getHello(): string;
}
