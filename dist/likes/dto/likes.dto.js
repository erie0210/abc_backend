"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikesDto = void 0;
const likes_schema_1 = require("../likes.schema");
const swagger_1 = require("@nestjs/swagger");
class LikesDto extends (0, swagger_1.PickType)(likes_schema_1.Likes, ['userId', 'postId']) {
}
exports.LikesDto = LikesDto;
//# sourceMappingURL=likes.dto.js.map