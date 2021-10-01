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
exports.CalculatorsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const calculators_service_1 = require("./calculators.service");
const jwt_guard_1 = require("../auth/jwt/jwt.guard");
let CalculatorsController = class CalculatorsController {
    constructor(calculatorService) {
        this.calculatorService = calculatorService;
    }
    getRecipeToCalculator() {
        return '계산기로 레시피 이동';
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Calculator로 이동 Server Error...',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Calculator로 이동 성공',
    }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CalculatorsController.prototype, "getRecipeToCalculator", null);
CalculatorsController = __decorate([
    (0, common_1.Controller)('calculators'),
    __metadata("design:paramtypes", [calculators_service_1.CalculatorsService])
], CalculatorsController);
exports.CalculatorsController = CalculatorsController;
//# sourceMappingURL=calculators.controller.js.map