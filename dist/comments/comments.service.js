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
exports.CommentsService = void 0;
const comments_schema_1 = require("./comments.schema");
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("mongoose");
const recipe_repository_1 = require("../recipe/recipe.repository");
const users_repository_1 = require("../users/users.repository");
let CommentsService = class CommentsService {
    constructor(commentsModel, recipeRepository, usersRepository) {
        this.commentsModel = commentsModel;
        this.recipeRepository = recipeRepository;
        this.usersRepository = usersRepository;
    }
    async createComment(id, commentData) {
        try {
            return await this.commentsModel.create(commentData);
        }
        catch (error) {
            console.warn(error);
        }
    }
    async saveComment(id, commentData) {
        try {
            const target = await this.recipeRepository.findById(id);
            const { author, contents } = commentData;
            const validateAuthor = await this.usersRepository.findUserByIdWithoutPassword(author);
            const newComment = new this.commentsModel({
                author: validateAuthor.id,
                name: validateAuthor.nickname,
                contents,
                info: target._id,
            });
            return await newComment.save();
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async findComment(id) {
        try {
            return this.commentsModel.findById(id);
        }
        catch (error) {
            console.warn(error);
        }
    }
    async deleteComment(id) {
        try {
            return this.commentsModel.findByIdAndDelete(id);
        }
        catch (error) {
            console.warn(error);
        }
    }
};
CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(comments_schema_1.Comments.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        recipe_repository_1.RecipeRepository,
        users_repository_1.UsersRepository])
], CommentsService);
exports.CommentsService = CommentsService;
//# sourceMappingURL=comments.service.js.map