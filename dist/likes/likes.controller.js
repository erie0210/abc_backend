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
exports.LikesController = void 0;
const common_1 = require("@nestjs/common");
const likes_dto_1 = require("./dto/likes.dto");
const likes_service_1 = require("./likes.service");
const swagger_1 = require("@nestjs/swagger");
let LikesController = class LikesController {
    constructor(likesService) {
        this.likesService = likesService;
    }
    async plusLikes(body) {
        return await this.likesService.plusLikes(body);
    }
    async minusLikes(body) {
        return await this.likesService.minusLikes(body);
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '좋아요 추가 Server Error...',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
    }),
    (0, swagger_1.ApiOperation)({ summary: '좋아요 추가' }),
    (0, common_1.Post)('/plus'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [likes_dto_1.LikesDto]),
    __metadata("design:returntype", Promise)
], LikesController.prototype, "plusLikes", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '좋아요 삭제 Server Error...',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
    }),
    (0, swagger_1.ApiOperation)({ summary: '좋아요 삭제' }),
    (0, common_1.Post)('/minus'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [likes_dto_1.LikesDto]),
    __metadata("design:returntype", Promise)
], LikesController.prototype, "minusLikes", null);
LikesController = __decorate([
    (0, common_1.Controller)('likes'),
    __metadata("design:paramtypes", [likes_service_1.LikesService])
], LikesController);
exports.LikesController = LikesController;
//# sourceMappingURL=likes.controller.js.map