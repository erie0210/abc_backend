"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const recipe_schema_1 = require("../recipe.schema");
class RecipeRequestDto extends (0, swagger_1.PickType)(recipe_schema_1.Recipe, [
    'title',
    'share',
    'view',
    'likes',
    'contents',
    'pictures',
    'star',
    'ingredients',
    'nutrition',
    'author',
]) {
}
exports.RecipeRequestDto = RecipeRequestDto;
//# sourceMappingURL=recipe.request.dto.js.map