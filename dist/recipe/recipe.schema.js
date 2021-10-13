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
exports.RecipeSchema = exports.Recipe = void 0;
const mongoose_1 = require("mongoose");
const class_validator_1 = require("class-validator");
const mongoose_2 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const options = {
    timestamps: true,
};
let Recipe = class Recipe extends mongoose_1.Document {
};
__decorate([
    (0, mongoose_2.Prop)({
        type: String,
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Recipe.prototype, "title", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: Boolean,
        required: true,
    }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], Recipe.prototype, "share", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: Number,
        default: 0,
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Recipe.prototype, "view", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '좋아요',
        required: true,
    }),
    (0, mongoose_2.Prop)({
        type: Number,
        default: 0,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], Recipe.prototype, "likes", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: String,
        default: '',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Recipe.prototype, "contents", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: Array,
        default: ['https://i.stack.imgur.com/y9DpT.jpg'],
    }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], Recipe.prototype, "pictures", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: Number,
        required: true,
        default: 3,
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Recipe.prototype, "star", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: Array,
        required: true,
    }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], Recipe.prototype, "ingredients", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: Array,
        required: true,
    }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], Recipe.prototype, "nutrition", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: String,
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Recipe.prototype, "author", void 0);
Recipe = __decorate([
    (0, mongoose_2.Schema)(options)
], Recipe);
exports.Recipe = Recipe;
const _RecipeSchema = mongoose_2.SchemaFactory.createForClass(Recipe);
_RecipeSchema.virtual('comments', {
    ref: 'comments',
    localField: '_id',
    foreignField: 'info',
});
_RecipeSchema.set('toObject', { virtuals: true });
_RecipeSchema.set('toJSON', { virtuals: true });
exports.RecipeSchema = _RecipeSchema;
//# sourceMappingURL=recipe.schema.js.map