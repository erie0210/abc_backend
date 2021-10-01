"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsModule = void 0;
const comments_schema_1 = require("./comments.schema");
const recipe_schema_1 = require("../recipe/recipe.schema");
const users_schema_1 = require("../users/users.schema");
const comments_controller_1 = require("./comments.controller");
const comments_service_1 = require("./comments.service");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const recipe_modules_1 = require("../recipe/recipe.modules");
const recipe_repository_1 = require("../recipe/recipe.repository");
const users_module_1 = require("../users/users.module");
let CommentsModule = class CommentsModule {
};
CommentsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: comments_schema_1.Comments.name, schema: comments_schema_1.CommentsSchema },
                { name: recipe_schema_1.Recipe.name, schema: recipe_schema_1.RecipeSchema },
                { name: users_schema_1.Users.name, schema: users_schema_1.UserSchema },
            ]),
            recipe_modules_1.RecipeModule,
            users_module_1.UserModule,
        ],
        controllers: [comments_controller_1.CommentsController],
        providers: [comments_service_1.CommentsService, recipe_repository_1.RecipeRepository],
        exports: [comments_service_1.CommentsService, recipe_repository_1.RecipeRepository],
    })
], CommentsModule);
exports.CommentsModule = CommentsModule;
//# sourceMappingURL=comments.module.js.map