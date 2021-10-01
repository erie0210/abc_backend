import { Recipe } from '../recipe.schema';
declare const RecipeDto_base: import("@nestjs/common").Type<Pick<Recipe, "title" | "share" | "view" | "likes" | "contents" | "pictures" | "star" | "ingredients" | "nutrition" | "author" | "id">>;
export declare class RecipeDto extends RecipeDto_base {
}
export {};
