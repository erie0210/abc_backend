import { Response } from 'express';
import { AuthService } from 'src/auth/auth.service';
import { LoginRequestDto } from 'src/auth/dto/login.request.dto';
import { UserRequestDto } from './dto/users.request.dto';
import { UsersService } from './users.service';
import { UsersRepository } from './users.repository';
export declare class UsersController {
    private readonly usersService;
    private readonly authService;
    private readonly usersRepository;
    constructor(usersService: UsersService, authService: AuthService, usersRepository: UsersRepository);
    signUp(body: UserRequestDto): Promise<import("./users.schema").Users>;
    refresh(req: any, res: Response, body: any): Promise<string>;
    getOneUser(body: UserRequestDto): Promise<import("./users.schema").Users>;
    logIn(req: any, res: Response, data: LoginRequestDto): Promise<{
        user: import("./users.schema").Users;
        token: string;
        refreshToken: string;
        hashedToken: string;
    }>;
    logOut(): Promise<string>;
}
