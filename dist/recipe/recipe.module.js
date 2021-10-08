"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeModule = void 0;
const comments_schema_1 = require("../comments/comments.schema");
const recipe_schema_1 = require("./recipe.schema");
const users_schema_1 = require("../users/users.schema");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const recipe_repository_1 = require("./recipe.repository");
const recipe_service_1 = require("./recipe.service");
const recipe_controller_1 = require("./recipe.controller");
let RecipeModule = class RecipeModule {
};
RecipeModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: recipe_schema_1.Recipe.name, schema: recipe_schema_1.RecipeSchema },
                { name: comments_schema_1.Comments.name, schema: comments_schema_1.CommentsSchema },
            ]),
        ],
        controllers: [recipe_controller_1.RecipesController],
        providers: [recipe_service_1.RecipeService, recipe_repository_1.RecipeRepository],
        exports: [recipe_service_1.RecipeService, recipe_repository_1.RecipeRepository],
    })
], RecipeModule);
exports.RecipeModule = RecipeModule;
//# sourceMappingURL=recipe.module.js.map