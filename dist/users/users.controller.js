"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const http_exception_filter_1 = require("../common/exceptions/http-exception.filter");
const success_interceptor_1 = require("../common/interceptors/success.interceptor");
const auth_service_1 = require("../auth/auth.service");
const login_request_dto_1 = require("../auth/dto/login.request.dto");
const jwt_guard_1 = require("../auth/jwt/jwt.guard");
const user_dto_1 = require("./dto/user.dto");
const users_request_dto_1 = require("./dto/users.request.dto");
const users_service_1 = require("./users.service");
const user_decorators_1 = require("../common/decorators/user.decorators");
const users_repository_1 = require("./users.repository");
const jwt_refresh_guard_1 = require("../auth/jwt/jwt-refresh.guard");
let UsersController = class UsersController {
    constructor(usersService, authService, usersRepository) {
        this.usersService = usersService;
        this.authService = authService;
        this.usersRepository = usersRepository;
    }
    async signUp(body) {
        return await this.usersService.signUp(body);
    }
    async refresh(req, res, body) {
        const { id } = body;
        try {
            const refreshToken = req.cookies.Refresh;
            const user = await this.authService.getUserIfTokenMatch(id, refreshToken);
            const { email, _id } = user;
            const payload = { email: email, sub: _id };
            const token = await this.authService.getAccessToken(payload);
            res.cookie('Authentication', token);
            return token;
        }
        catch (error) {
            return 'Refresh Token Validaion Error';
        }
    }
    async getOneUser(body) {
        return this.usersService.getOneUser(body);
    }
    async getUser(id) {
        return this.usersService.getUser(id);
    }
    async logIn(req, res, data) {
        const { user, token, refreshToken, hashedToken } = await this.authService.jwtLogIn(data);
        res.cookie('Refresh', hashedToken);
        return { user, token, refreshToken, hashedToken };
    }
    async logOut() {
        return 'logout';
    }
    async updateUser(id, body) {
        return await this.usersService.updateUser(id, body);
    }
    async deleteUser(id) {
        return await this.usersService.deleteUser(id);
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '?????? ?????? Server Error...',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '???????????? ??????',
        type: user_dto_1.ReadOnlyUserDto,
    }),
    (0, swagger_1.ApiOperation)({ summary: '????????????' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_request_dto_1.UserRequestDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "signUp", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'access token ???????????? Server Error...',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'access token ???????????? ??????',
    }),
    (0, swagger_1.ApiOperation)({ summary: 'access token ????????????' }),
    (0, common_1.UseGuards)(jwt_refresh_guard_1.JwtRefreshAuthGuard),
    (0, common_1.Post)('refresh'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "refresh", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
    }),
    (0, swagger_1.ApiOperation)({ summary: '?????? ?????? ?????? ????????????' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_request_dto_1.UserRequestDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getOneUser", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
    }),
    (0, swagger_1.ApiOperation)({ summary: '?????? ?????? ?????? ????????????- ?????? ?????? ????????????' }),
    (0, common_1.Get)('/update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUser", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '????????? Server Error...',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '????????? ??????',
    }),
    (0, swagger_1.ApiOperation)({ summary: '?????????' }),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, login_request_dto_1.LoginRequestDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "logIn", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '????????????' }),
    (0, common_1.Post)('logout'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "logOut", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '?????? ?????? ?????? Server Error...',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '?????? ?????? ?????? ??????',
        type: user_dto_1.ReadOnlyUserDto,
    }),
    (0, swagger_1.ApiOperation)({ summary: '?????? ?????? ??????' }),
    (0, common_1.Patch)('/update/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUser", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '???????????? Server Error...',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '???????????? ??????',
        type: user_dto_1.ReadOnlyUserDto,
    }),
    (0, swagger_1.ApiOperation)({ summary: '????????????' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUser", null);
UsersController = __decorate([
    (0, common_1.Controller)('users'),
    (0, common_1.UseInterceptors)(success_interceptor_1.SuccessInterceptor),
    (0, common_1.UseFilters)(http_exception_filter_1.HttpExceptionFilter),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        auth_service_1.AuthService,
        users_repository_1.UsersRepository])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map