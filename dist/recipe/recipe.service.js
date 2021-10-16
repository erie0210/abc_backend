"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const recipe_repository_1 = require("./recipe.repository");
let RecipeService = class RecipeService {
    constructor(recipeRepository) {
        this.recipeRepository = recipeRepository;
    }
    async publicRecipe(page, sort) {
        try {
            return await this.recipeRepository.findPublic(page, sort);
        }
        catch (error) {
            throw new mongoose_1.Error(error);
        }
    }
    async privateRecipe(category, userId, page) {
        try {
            return await this.recipeRepository.findByUser(userId, page, category);
        }
        catch (error) {
            throw new mongoose_1.Error(error);
        }
    }
    async searchRecipe(keyword, page, sort) {
        try {
            return await this.recipeRepository.findByKeyword(keyword, page, sort);
        }
        catch (error) {
            throw new mongoose_1.Error(error);
        }
    }
    async getRecipe(id) {
        try {
            return await this.recipeRepository.findById(id);
        }
        catch (error) {
            throw new mongoose_1.Error(error);
        }
    }
    async createRecipe(body) {
        try {
            const { title, share, view, likes, contents, pictures, star, ingredients, nutrition, author, } = body;
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
        }
        catch (error) {
            console.warn(error);
        }
    }
    async updateRecipe(id, data) {
        try {
            const res = await this.recipeRepository.update(id, data);
            return res;
        }
        catch (error) {
            throw new mongoose_1.Error(error);
        }
    }
    async deleteRecipe(id) {
        try {
            return await this.recipeRepository.delete(id);
        }
        catch (error) {
            throw new mongoose_1.Error(error);
        }
    }
    async plusLike(id) {
        try {
            const recipe = await this.recipeRepository.findById(id);
            recipe.likes += 1;
            return await recipe.save();
        }
        catch (error) {
            console.warn(error);
        }
    }
    async minusLike(id) {
        try {
            const recipe = await this.recipeRepository.findById(id);
            recipe.likes -= 1;
            return await recipe.save();
        }
        catch (error) {
            console.warn(error);
        }
    }
};
RecipeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [recipe_repository_1.RecipeRepository])
], RecipeService);
exports.RecipeService = RecipeService;
//# sourceMappingURL=recipe.service.js.map