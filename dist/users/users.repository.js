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
exports.UsersRepository = void 0;
const http_exception_filter_1 = require("../common/exceptions/http-exception.filter");
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("mongoose");
const users_schema_1 = require("./users.schema");
let UsersRepository = class UsersRepository {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async findAll() {
        return await this.userModel.find();
    }
    async findUserByIdWithoutPassword(userId) {
        const user = await this.userModel.findById(userId).select('-passwd');
        return user;
    }
    async findUserByEmail(email) {
        const user = await this.userModel.findOne({ email });
        return user;
    }
    async findUserById(id) {
        const user = await this.userModel.findById(id);
        return user;
    }
    async existsByEmail(email) {
        try {
            const result = await this.userModel.exists({ email });
            return result;
        }
        catch (error) {
            throw new common_1.HttpException('db error', 400);
        }
    }
    async create(user) {
        return await this.userModel.create(user);
    }
    async updateRefreshToken(id, token) {
        const res = await this.userModel.findByIdAndUpdate(id, {
            refreshToken: token,
        });
        return res;
    }
    async update(id, body) {
        try {
            return await this.userModel.findByIdAndUpdate(id, body);
        }
        catch (error) {
            console.warn(error);
        }
    }
};
UsersRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(users_schema_1.Users.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersRepository);
exports.UsersRepository = UsersRepository;
//# sourceMappingURL=users.repository.js.map