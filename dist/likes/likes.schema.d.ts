import { Document } from 'mongoose';
export declare class Likes extends Document {
    userId: string;
    postId: string;
}
export declare const LikesSchema: import("mongoose").Schema<Likes, import("mongoose").Model<Likes, any, any>, undefined, {}>;
