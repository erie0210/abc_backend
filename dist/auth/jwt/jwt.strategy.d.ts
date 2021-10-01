import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { Payload } from './jwt.payload';
import { UsersRepository } from 'src/users/users.repository';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly usersRepository;
    private readonly configService;
    constructor(usersRepository: UsersRepository, configService: ConfigService);
    validate(payload: Payload): Promise<import("../../users/dto/users.request.dto").UserRequestDto>;
}
export {};
