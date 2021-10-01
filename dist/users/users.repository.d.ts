import { Model, Types } from 'mongoose';
import { Users } from './users.schema';
import { UserRequestDto } from './dto/users.request.dto';
export declare class UsersRepository {
    private readonly userModel;
    constructor(userModel: Model<Users>);
    findAll(): Promise<Users[]>;
    findUserByIdWithoutPassword(userId: string | Types.ObjectId): Promise<UserRequestDto | null>;
    findUserByEmail(email: string): Promise<Users>;
    findUserById(id: string): Promise<Users>;
    existsByEmail(email: string): Promise<boolean>;
    create(user: UserRequestDto): Promise<Users>;
    updateRefreshToken(id: string, token: string): Promise<Users>;
}
