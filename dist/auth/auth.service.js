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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcrypt = require("bcrypt");
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const users_repository_1 = require("../users/users.repository");
let AuthService = class AuthService {
    constructor(usersRepository, jwtService, configService) {
        this.usersRepository = usersRepository;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async jwtLogIn(data) {
        const { email, passwd } = data;
        const user = await this.usersRepository.findUserByEmail(email);
        if (!user) {
            throw new common_1.UnauthorizedException('이메일과 비밀번호를 확인해주세요.');
        }
        const isPasswordValidated = await bcrypt.compare(passwd, user.passwd);
        if (!isPasswordValidated) {
            throw new common_1.UnauthorizedException('이메일과 비밀번호를 확인해주세요');
        }
        const payload = { email: email, sub: user.id };
        const token = this.jwtService.sign(payload, {
            secret: 'secretKey',
            expiresIn: '7200000s',
        });
        const refreshToken = this.jwtService.sign(payload, {
            secret: 'secretKey',
            expiresIn: '7200000s',
        });
        const res = await this.setCurrentRefreshToken(user.id, refreshToken);
        const hashedToken = res;
        return { token, refreshToken, hashedToken };
    }
    async getAccessToken(payload) {
        const token = this.jwtService.sign(payload, {
            secret: 'secretKey',
            expiresIn: '7200000s',
        });
        return token;
    }
    async getRefreshToken(id) {
        const payload = { id };
        const refreshToken = this.jwtService.sign(payload, {
            secret: 'secretKey',
            expiresIn: '7200000s',
        });
        return refreshToken;
    }
    async setCurrentRefreshToken(id, refreshToken) {
        const currentHashedRefreshedToken = await (0, bcrypt_1.hash)(refreshToken, 10);
        await this.usersRepository.updateRefreshToken(id, refreshToken);
        return currentHashedRefreshedToken;
    }
    async getUserIfTokenMatch(id, hashedToken) {
        const user = await this.usersRepository.findUserById(id);
        const isMatching = await (0, bcrypt_1.compare)(user.refreshToken, hashedToken);
        if (isMatching) {
            return user;
        }
    }
    async removeFreshToken(id) {
        const token = '';
        return this.usersRepository.updateRefreshToken(id, token);
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map