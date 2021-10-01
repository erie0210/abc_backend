"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const users_schema_1 = require("./users.schema");
const auth_module_1 = require("../auth/auth.module");
const mongoose_1 = require("@nestjs/mongoose");
const users_controller_1 = require("./users.controller");
const users_repository_1 = require("./users.repository");
const users_service_1 = require("./users.service");
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: users_schema_1.Users.name, schema: users_schema_1.UserSchema }]),
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule),
        ],
        controllers: [users_controller_1.UsersController],
        providers: [users_service_1.UsersService, users_repository_1.UsersRepository],
        exports: [users_service_1.UsersService, users_repository_1.UsersRepository],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=users.module.js.map