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
exports.BakerySchema = exports._BakerySchema = exports.Bakery = void 0;
const mongoose_1 = require("mongoose");
const class_validator_1 = require("class-validator");
const mongoose_2 = require("@nestjs/mongoose");
const options = {
    timestamps: true,
};
let Bakery = class Bakery extends mongoose_1.Document {
};
__decorate([
    (0, mongoose_2.Prop)({ required: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Bakery.prototype, "title", void 0);
__decorate([
    (0, mongoose_2.Prop)({ required: true, default: 0 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Bakery.prototype, "view", void 0);
__decorate([
    (0, mongoose_2.Prop)({ required: true, default: 0 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Bakery.prototype, "likes", void 0);
__decorate([
    (0, mongoose_2.Prop)({ required: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Bakery.prototype, "body", void 0);
__decorate([
    (0, mongoose_2.Prop)({ required: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Bakery.prototype, "picture", void 0);
__decorate([
    (0, mongoose_2.Prop)({ required: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Bakery.prototype, "author", void 0);
Bakery = __decorate([
    (0, mongoose_2.Schema)(options)
], Bakery);
exports.Bakery = Bakery;
exports._BakerySchema = mongoose_2.SchemaFactory.createForClass(Bakery);
exports._BakerySchema.virtual('comments', {
    ref: 'comments',
    localField: '_id',
    foreignField: 'info',
});
exports._BakerySchema.virtual('users', {
    ref: 'users',
    localField: 'author',
    foreignField: '_id',
});
exports._BakerySchema.set('toObject', { virtuals: true });
exports._BakerySchema.set('toJSON', { virtuals: true });
exports.BakerySchema = exports._BakerySchema;
//# sourceMappingURL=bakery.schema.js.map