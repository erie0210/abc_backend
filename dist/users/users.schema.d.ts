import { Document } from 'mongoose';
export declare class Users extends Document {
    email: string;
    passwd: string;
    nickname: string;
    picture: string;
    refreshToken: string;
    grant: number;
    readonly readOnlyData: {
        id: number;
        email: string;
        nickname: string;
        picture: string;
        grant: number;
        refreshToken: string;
    };
}
export declare const UserSchema: import("mongoose").Schema<Users, import("mongoose").Model<Users, any, any>, undefined, {}>;
