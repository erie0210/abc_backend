"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BakeryRequestDto = void 0;
const bakery_schema_1 = require("../bakery.schema");
const swagger_1 = require("@nestjs/swagger");
class BakeryRequestDto extends (0, swagger_1.PickType)(bakery_schema_1.Bakery, [
    'title',
    'body',
    'picture',
    'author',
]) {
}
exports.BakeryRequestDto = BakeryRequestDto;
//# sourceMappingURL=bakery.request.dto.js.map