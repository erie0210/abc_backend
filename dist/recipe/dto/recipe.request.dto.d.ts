import { Recipe } from '../recipe.schema';
declare const RecipeRequestDto_base: import("@nestjs/common").Type<Pick<Recipe, "title" | "share" | "view" | "likes" | "contents" | "pictures" | "star" | "ingredients" | "nutrition" | "author">>;
export declare class RecipeRequestDto extends RecipeRequestDto_base {
}
export {};
