import { Document } from 'mongoose';
export declare class Bakery extends Document {
    title: string;
    view: number;
    likes: number;
    body: string;
    picture: string;
    author: string;
}
export declare const _BakerySchema: import("mongoose").Schema<Bakery, import("mongoose").Model<Bakery, any, any>, undefined, {}>;
export declare const BakerySchema: import("mongoose").Schema<Bakery, import("mongoose").Model<Bakery, any, any>, undefined, {}>;
