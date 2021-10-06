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
exports.BakeryRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bakery_schema_1 = require("./bakery.schema");
const mongoose = require("mongoose");
const comments_schema_1 = require("../comments/comments.schema");
const users_schema_1 = require("../users/users.schema");
let BakeryRepository = class BakeryRepository {
    constructor(bakeryModel) {
        this.bakeryModel = bakeryModel;
    }
    async findAll(page) {
        const CommentsModel = mongoose.model('comments', comments_schema_1.CommentsSchema);
        const UsersModel = mongoose.model('users', users_schema_1.UserSchema);
        return await this.bakeryModel
            .find()
            .populate('comments', CommentsModel)
            .populate('users', UsersModel)
            .limit(page * 10)
            .sort('createdAt');
    }
    async findOne(id) {
        const CommentsModel = mongoose.model('comments', comments_schema_1.CommentsSchema);
        const UsersModel = mongoose.model('users', users_schema_1.UserSchema);
        return await this.bakeryModel
            .findById(id)
            .populate('comments', CommentsModel)
            .populate('users', UsersModel);
    }
    async create(bakery) {
        try {
            return await this.bakeryModel.create(bakery);
        }
        catch (error) {
            console.warn(error);
        }
    }
    async update(id, data) {
        try {
            return await this.bakeryModel.findByIdAndUpdate(id, data);
        }
        catch (error) {
            console.warn(error);
        }
    }
    async delete(id) {
        return await this.bakeryModel.findByIdAndDelete(id);
    }
};
BakeryRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(bakery_schema_1.Bakery.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BakeryRepository);
exports.BakeryRepository = BakeryRepository;
//# sourceMappingURL=bakery.repository.js.map