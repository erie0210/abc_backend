import { Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';
import { ConfigService } from '@nestjs/config';
import { Payload } from './jwt.payload';
import { UsersRepository } from 'src/users/users.repository';
declare const JwtRefreshStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtRefreshStrategy extends JwtRefreshStrategy_base {
    private readonly usersRepository;
    private readonly configService;
    private readonly authService;
    constructor(usersRepository: UsersRepository, configService: ConfigService, authService: AuthService);
    validate(req: any, payload: Payload): Promise<import("../../users/users.schema").Users>;
}
export {};
