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
exports.RecipesController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const http_exception_filter_1 = require("../common/exceptions/http-exception.filter");
const recipe_service_1 = require("./recipe.service");
const success_interceptor_1 = require("../common/interceptors/success.interceptor");
const recipe_request_dto_1 = require("./dto/recipe.request.dto");
const jwt_guard_1 = require("../auth/jwt/jwt.guard");
let RecipesController = class RecipesController {
    constructor(recipeService) {
        this.recipeService = recipeService;
        this.logger = new common_1.Logger('RecipeController');
    }
    async getPublicRecipe(page, sort) {
        this.logger.verbose(`User A trying to get all public recipes`);
        return await this.recipeService.publicRecipe(page, sort);
    }
    async search(body) {
        const { keyword, page, sort } = body;
        const res = await this.recipeService.searchRecipe(keyword, page, sort);
        return res;
    }
    async getPrivateCacheRecipe(userId) {
        return await this.recipeService.cachePrivateRecipe(userId);
    }
    async getPrivateRecipe(category, userId, page) {
        return await this.recipeService.privateRecipe(category, userId, page);
    }
    async getOneRecipe(id) {
        return await this.recipeService.getRecipe(id);
    }
    async createRecipe(data) {
        return await this.recipeService.createRecipe(data);
    }
    async updateRecipe(id, data) {
        return await this.recipeService.updateRecipe(id, data);
    }
    async deleteRecipe(param) {
        return await this.recipeService.deleteRecipe(param);
    }
    async plusLike(id) {
        return this.recipeService.plusLike(id);
    }
    async minusLike(id) {
        return this.recipeService.minusLike(id);
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Public Recipe 가져오기 Server Error...',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
    }),
    (0, swagger_1.ApiOperation)({ summary: 'Public Recipe 전체 가져오기' }),
    (0, common_1.Get)('/public/:page/:sort'),
    __param(0, (0, common_1.Param)('page')),
    __param(1, (0, common_1.Param)('sort')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RecipesController.prototype, "getPublicRecipe", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Recipe 검색 Server Error...',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Recipe 검색 성공',
    }),
    (0, swagger_1.ApiOperation)({ summary: 'Recipe 검색' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Post)('/search'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RecipesController.prototype, "search", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '특정 user의 Recipe 캐싱 Server Error...',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '특정 user의 Recipe 캐싱 성공',
    }),
    (0, swagger_1.ApiOperation)({ summary: '특정 user의 recipe 전체 가져오기' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/private/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RecipesController.prototype, "getPrivateCacheRecipe", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '특정 user의 특정 카테고리 Recipe 전체 가져오기 Server Error...',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
    }),
    (0, swagger_1.ApiOperation)({ summary: '특정 user의 특정 카테고리 Recipe 전체 가져오기' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/private/:category/:id/:page'),
    __param(0, (0, common_1.Param)('category')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Param)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], RecipesController.prototype, "getPrivateRecipe", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '특정 Recipe 가져오기 Server Error...',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
    }),
    (0, swagger_1.ApiOperation)({ summary: '특정 Recipe 가져오기' }),
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RecipesController.prototype, "getOneRecipe", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Recipe 생성 Server Error...',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Recipe 생성 성공!',
    }),
    (0, swagger_1.ApiOperation)({ summary: 'Recipe 생성' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [recipe_request_dto_1.RecipeRequestDto]),
    __metadata("design:returntype", Promise)
], RecipesController.prototype, "createRecipe", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Recipe 업데이트 Server Error...',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
    }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('/update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RecipesController.prototype, "updateRecipe", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Recipe 삭제하기 Server Error...',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
    }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RecipesController.prototype, "deleteRecipe", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '좋아요 수 올리기',
    }),
    (0, common_1.Patch)('/plus/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RecipesController.prototype, "plusLike", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '좋아요 수 줄이기',
    }),
    (0, common_1.Patch)('/minus/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RecipesController.prototype, "minusLike", null);
RecipesController = __decorate([
    (0, common_1.Controller)('recipes'),
    (0, common_1.UseInterceptors)(success_interceptor_1.SuccessInterceptor),
    (0, common_1.UseFilters)(http_exception_filter_1.HttpExceptionFilter),
    __metadata("design:paramtypes", [recipe_service_1.RecipeService])
], RecipesController);
exports.RecipesController = RecipesController;
//# sourceMappingURL=recipe.controller.js.map