import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { LoginRequestDto } from './dto/login.request.dto';
import { Payload } from './jwt/jwt.payload';
import { UsersRepository } from 'src/users/users.repository';
export declare class AuthService {
    private readonly usersRepository;
    private jwtService;
    private configService;
    constructor(usersRepository: UsersRepository, jwtService: JwtService, configService: ConfigService);
    jwtLogIn(data: LoginRequestDto): Promise<{
        user: import("../users/users.schema").Users;
        token: string;
        refreshToken: string;
        hashedToken: string;
    }>;
    getAccessToken(payload: Payload): Promise<string>;
    getRefreshToken(id: string): Promise<string>;
    setCurrentRefreshToken(id: string, refreshToken: string): Promise<string>;
    getUserIfTokenMatch(id: string, hashedToken: string): Promise<import("../users/users.schema").Users>;
    removeFreshToken(id: string): Promise<import("../users/users.schema").Users>;
}
