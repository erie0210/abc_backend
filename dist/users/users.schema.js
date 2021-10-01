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
exports.UserSchema = exports.Users = void 0;
const mongoose_1 = require("mongoose");
const class_validator_1 = require("class-validator");
const mongoose_2 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const options = {
    timestamps: true,
};
let Users = class Users extends mongoose_1.Document {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '유저 email',
        required: true,
        example: 'abc@gmail.com',
    }),
    (0, mongoose_2.Prop)({ required: true }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '비밀번호',
        required: true,
        example: 'abc',
    }),
    (0, mongoose_2.Prop)({ required: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Users.prototype, "passwd", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '닉네임',
        required: true,
        example: 'nick',
    }),
    (0, mongoose_2.Prop)({ required: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Users.prototype, "nickname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '유저 프로필 사진',
        example: 'abc.jpg',
    }),
    (0, mongoose_2.Prop)({
        default: 'https://job.csj.ac.kr/assets/images/contents/no-img.png',
    }),
    __metadata("design:type", String)
], Users.prototype, "picture", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'current hashed refreshToken',
    }),
    (0, mongoose_2.Prop)({
        default: '',
    }),
    __metadata("design:type", String)
], Users.prototype, "refreshToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '유저 권한',
        example: '0',
    }),
    (0, mongoose_2.Prop)({
        default: 0,
    }),
    __metadata("design:type", Number)
], Users.prototype, "grant", void 0);
Users = __decorate([
    (0, mongoose_2.Schema)(options)
], Users);
exports.Users = Users;
exports.UserSchema = mongoose_2.SchemaFactory.createForClass(Users);
exports.UserSchema.virtual('readOnlyData').get(function () {
    return {
        id: this.id,
        email: this.email,
        nickname: this.nickname,
        picture: this.picture,
        grant: this.grant,
        refreshToken: this.refreshToken,
    };
});
//# sourceMappingURL=users.schema.js.map