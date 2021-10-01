"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadOnlyUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const users_schema_1 = require("../users.schema");
class ReadOnlyUserDto extends (0, swagger_1.PickType)(users_schema_1.Users, [
    'id',
    'email',
    'nickname',
    'picture',
    'grant',
    'refreshToken',
]) {
}
exports.ReadOnlyUserDto = ReadOnlyUserDto;
//# sourceMappingURL=user.dto.js.map