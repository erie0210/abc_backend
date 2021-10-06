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
exports.LikesRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const likes_schema_1 = require("./likes.schema");
let LikesRepository = class LikesRepository {
    constructor(likesModel) {
        this.likesModel = likesModel;
    }
    async plusLike(like) {
        try {
            return await this.likesModel.create(like);
        }
        catch (error) {
            console.warn(error);
        }
    }
    async minusLike(like) {
        try {
            const { userId, postId } = like;
            return await this.likesModel.findOneAndDelete({
                userId: userId,
                postId: postId,
            });
        }
        catch (error) {
            console.warn(error);
        }
    }
    async getLike(like) {
        try {
            const { userId, postId } = like;
            return await this.likesModel.find({
                postId: postId,
            });
        }
        catch (error) {
            console.warn(error);
        }
    }
};
LikesRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(likes_schema_1.Likes.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], LikesRepository);
exports.LikesRepository = LikesRepository;
//# sourceMappingURL=likes.repository.js.map