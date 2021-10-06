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
exports.BakeryService = void 0;
const bakery_repository_1 = require("./bakery.repository");
const common_1 = require("@nestjs/common");
let BakeryService = class BakeryService {
    constructor(bakeryRepository) {
        this.bakeryRepository = bakeryRepository;
    }
    async getAllBakery(page) {
        try {
            return await this.bakeryRepository.findAll(page);
        }
        catch (error) {
            console.warn(error);
        }
    }
    async getOneBakery(id) {
        try {
            return await this.bakeryRepository.findOne(id);
        }
        catch (error) {
            console.warn(error);
        }
    }
    async createBakery(bakery) {
        try {
            const { title, body, picture, author } = bakery;
            return await this.bakeryRepository.create({
                title,
                body,
                picture,
                author,
            });
        }
        catch (error) {
            console.warn(error);
        }
    }
    async updateBakery(id, data) {
        try {
            return await this.bakeryRepository.update(id, data);
        }
        catch (error) {
            console.warn(error);
        }
    }
    async deleteBakery(id) {
        try {
            return await this.bakeryRepository.delete(id);
        }
        catch (error) {
            console.warn(error);
        }
    }
};
BakeryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [bakery_repository_1.BakeryRepository])
], BakeryService);
exports.BakeryService = BakeryService;
//# sourceMappingURL=bakery.service.js.map