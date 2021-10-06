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
exports.LikesService = void 0;
const common_1 = require("@nestjs/common");
const likes_repository_1 = require("./likes.repository");
let LikesService = class LikesService {
    constructor(likesRepository) {
        this.likesRepository = likesRepository;
    }
    async plusLikes(like) {
        try {
            return await this.likesRepository.plusLike(like);
        }
        catch (error) {
            console.warn(error);
        }
    }
    async minusLikes(like) {
        try {
            return await this.likesRepository.minusLike(like);
        }
        catch (error) {
            console.warn(error);
        }
    }
};
LikesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [likes_repository_1.LikesRepository])
], LikesService);
exports.LikesService = LikesService;
//# sourceMappingURL=likes.service.js.map