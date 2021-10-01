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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const users_schema_1 = require("../users/users.schema");
const recipe_schema_1 = require("./recipe.schema");
const mongoose = require("mongoose");
const comments_schema_1 = require("../comments/comments.schema");
let RecipeRepository = class RecipeRepository {
    constructor(recipeModel) {
        this.recipeModel = recipeModel;
    }
    async findPublic(page, sort) {
        const sortBy = new Object();
        sortBy[sort] = 'asc';
        const CommentsModel = mongoose.model('comments', comments_schema_1.CommentsSchema);
        return await this.recipeModel
            .find({ share: true })
            .populate('comments', CommentsModel)
            .limit(10 * page)
            .sort(sortBy);
    }
    async findById(id) {
        const CommentsModel = mongoose.model('comments', comments_schema_1.CommentsSchema);
        return await this.recipeModel
            .findById(id)
            .populate('comments', CommentsModel);
    }
    async findByUser(userId, page, sort) {
        const CommentsModel = mongoose.model('comments', comments_schema_1.CommentsSchema);
        const sortBy = new Object();
        sortBy[sort] = 'desc';
        return await this.recipeModel
            .find({ author: userId })
            .sort([[sort, -1]])
            .sort([['createdAt', 1]])
            .limit(12 * page)
            .populate('comments', CommentsModel);
    }
    async findByKeyword(keyword, page, sort) {
        const CommentsModel = mongoose.model('comments', comments_schema_1.CommentsSchema);
        const sortBy = new Object();
        sortBy[sort] = 'asc';
        const res = await this.recipeModel
            .find()
            .or([
            { title: new RegExp(keyword) },
            { contents: new RegExp(keyword) },
            { comments: new RegExp(keyword) },
            { ingredients: new RegExp(keyword) },
            { nutrition: new RegExp(keyword) },
        ])
            .limit(12 * page)
            .sort(sortBy)
            .populate('comments', CommentsModel);
        return res;
    }
    async create(recipe) {
        return await this.recipeModel.create(recipe);
    }
    async update(id, data) {
        try {
            return await this.recipeModel.findByIdAndUpdate(id, data);
        }
        catch (error) {
            console.warn(error);
        }
    }
    async delete(id) {
        return await this.recipeModel.findByIdAndDelete(id);
    }
};
RecipeRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(recipe_schema_1.Recipe.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RecipeRepository);
exports.RecipeRepository = RecipeRepository;
//# sourceMappingURL=recipe.repository.js.map