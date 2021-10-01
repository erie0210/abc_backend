import { Document } from 'mongoose';
export declare class Recipe extends Document {
    title: string;
    share: boolean;
    view: number;
    likes: number;
    contents: string;
    pictures: Array<String>;
    star: number;
    ingredients: Array<Object>;
    nutrition: Array<Object>;
    author: string;
}
export declare const RecipeSchema: import("mongoose").Schema<Recipe, import("mongoose").Model<Recipe, any, any>, undefined, {}>;
