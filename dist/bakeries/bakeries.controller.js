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
exports.BakeriesController = void 0;
const common_1 = require("@nestjs/common");
const bakeries_service_1 = require("./bakeries.service");
let BakeriesController = class BakeriesController {
    constructor(bakeriesService) {
        this.bakeriesService = bakeriesService;
    }
    getAllBakeries() {
        return '모든 베이커리 정보 리턴';
    }
    getOneBakery() {
        return '특정한 베이커리 정보 리턴';
    }
    createBakery() {
        return '베이커리 정보 생성';
    }
    updateBakery() {
        return '특정 베이커리 정보 업데이트';
    }
    deleteBakery() {
        return '특정 베이커리 정보 삭제';
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BakeriesController.prototype, "getAllBakeries", null);
__decorate([
    (0, common_1.Get)(':id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BakeriesController.prototype, "getOneBakery", null);
__decorate([
    (0, common_1.Post)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BakeriesController.prototype, "createBakery", null);
__decorate([
    (0, common_1.Put)(':id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BakeriesController.prototype, "updateBakery", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BakeriesController.prototype, "deleteBakery", null);
BakeriesController = __decorate([
    (0, common_1.Controller)('bakeries'),
    __metadata("design:paramtypes", [bakeries_service_1.BakeriesService])
], BakeriesController);
exports.BakeriesController = BakeriesController;
//# sourceMappingURL=bakeries.controller.js.map