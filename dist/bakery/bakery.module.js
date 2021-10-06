"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BakeryModule = void 0;
const bakery_schema_1 = require("./bakery.schema");
const comments_schema_1 = require("../comments/comments.schema");
const bakery_controller_1 = require("./bakery.controller");
const bakery_repository_1 = require("./bakery.repository");
const bakery_service_1 = require("./bakery.service");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
let BakeryModule = class BakeryModule {
};
BakeryModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: bakery_schema_1.Bakery.name, schema: bakery_schema_1.BakerySchema }]),
            mongoose_1.MongooseModule.forFeature([
                { name: comments_schema_1.Comments.name, schema: comments_schema_1.CommentsSchema },
            ]),
        ],
        controllers: [bakery_controller_1.BakeryController],
        providers: [bakery_service_1.BakeryService, bakery_repository_1.BakeryRepository],
    })
], BakeryModule);
exports.BakeryModule = BakeryModule;
//# sourceMappingURL=bakery.module.js.map