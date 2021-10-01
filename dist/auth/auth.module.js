"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const jwt_1 = require("@nestjs/jwt");
const jwt_refresh_strategy_1 = require("./jwt/jwt-refresh.strategy");
const jwt_strategy_1 = require("./jwt/jwt.strategy");
const passport_1 = require("@nestjs/passport");
const users_module_1 = require("../users/users.module");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'jwt', session: false }),
            jwt_1.JwtModule.register({
                secret: 'secretKey',
            }),
            (0, common_1.forwardRef)(() => users_module_1.UserModule),
        ],
        providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy, jwt_refresh_strategy_1.JwtRefreshStrategy],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map