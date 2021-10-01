"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const recipe_schema_1 = require("../recipe.schema");
class RecipeDto extends (0, swagger_1.PickType)(recipe_schema_1.Recipe, [
    'id',
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
exports.RecipeDto = RecipeDto;
//# sourceMappingURL=recipe.dto.js.map