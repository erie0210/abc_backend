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
exports.BakeryController = void 0;
const common_1 = require("@nestjs/common");
const bakery_service_1 = require("./bakery.service");
const bakery_request_dto_1 = require("./dto/bakery.request.dto");
let BakeryController = class BakeryController {
    constructor(bakeryService) {
        this.bakeryService = bakeryService;
    }
    async getAllBakery(page) {
        return await this.bakeryService.getAllBakery(page);
    }
    async getOneBakery(id) {
        return await this.bakeryService.getOneBakery(id);
    }
    async createBakery(body) {
        return await this.bakeryService.createBakery(body);
    }
    async updateBakery(id, data) {
        return await this.bakeryService.updateBakery(id, data);
    }
    async deleteBakery(id) {
        return await this.bakeryService.deleteBakery(id);
    }
};
__decorate([
    (0, common_1.Get)(':page'),
    __param(0, (0, common_1.Param)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BakeryController.prototype, "getAllBakery", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BakeryController.prototype, "getOneBakery", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bakery_request_dto_1.BakeryRequestDto]),
    __metadata("design:returntype", Promise)
], BakeryController.prototype, "createBakery", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BakeryController.prototype, "updateBakery", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BakeryController.prototype, "deleteBakery", null);
BakeryController = __decorate([
    (0, common_1.Controller)('bakery'),
    __metadata("design:paramtypes", [bakery_service_1.BakeryService])
], BakeryController);
exports.BakeryController = BakeryController;
//# sourceMappingURL=bakery.controller.js.map