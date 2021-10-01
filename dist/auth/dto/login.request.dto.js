"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const users_schema_1 = require("../../users/users.schema");
class LoginRequestDto extends (0, swagger_1.PickType)(users_schema_1.Users, ['email', 'passwd']) {
}
exports.LoginRequestDto = LoginRequestDto;
//# sourceMappingURL=login.request.dto.js.map