import { Document, Types } from 'mongoose';
export declare class Comments extends Document {
    author: string;
    name: string;
    contents: string;
    info: Types.ObjectId;
    readonly readOnlyData: {};
}
export declare const CommentsSchema: import("mongoose").Schema<Comments, import("mongoose").Model<Comments, any, any>, undefined, {}>;
