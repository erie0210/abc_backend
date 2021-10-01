"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const users_schema_1 = require("../users.schema");
class UserRequestDto extends (0, swagger_1.PickType)(users_schema_1.Users, [
    'id',
    'email',
    'passwd',
    'nickname',
    'picture',
    'grant',
    'refreshToken',
]) {
}
exports.UserRequestDto = UserRequestDto;
//# sourceMappingURL=users.request.dto.js.map