import { UserRequestDto } from './dto/users.request.dto';
import { Users } from './users.schema';
import { UsersRepository } from './users.repository';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    signUp(body: UserRequestDto): Promise<Users>;
    getOneUser(body: UserRequestDto): Promise<Users>;
}
