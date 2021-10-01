"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsCreateDto = void 0;
const comments_schema_1 = require("../comments.schema");
const swagger_1 = require("@nestjs/swagger");
class CommentsCreateDto extends (0, swagger_1.PickType)(comments_schema_1.Comments, [
    'author',
    'contents',
]) {
}
exports.CommentsCreateDto = CommentsCreateDto;
//# sourceMappingURL=comments.create.dto.js.map