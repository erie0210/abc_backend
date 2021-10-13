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
exports.LikesSchema = exports.Likes = void 0;
const mongoose_1 = require("mongoose");
const class_validator_1 = require("class-validator");
const mongoose_2 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
let Likes = class Likes extends mongoose_1.Document {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '좋아요를 누른 사용자 Id',
        required: true,
        example: '',
    }),
    (0, mongoose_2.Prop)({
        type: String,
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Likes.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '좋아요를 누를 글 Id',
        required: true,
        example: '',
    }),
    (0, mongoose_2.Prop)({
        type: String,
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Likes.prototype, "postId", void 0);
Likes = __decorate([
    (0, mongoose_2.Schema)()
], Likes);
exports.Likes = Likes;
exports.LikesSchema = mongoose_2.SchemaFactory.createForClass(Likes);
//# sourceMappingURL=likes.schema.js.map