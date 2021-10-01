import { Model } from 'mongoose';
import { Comments } from './comments.schema';
export declare class CommentsRepository {
    private readonly commentsModel;
    constructor(commentsModel: Model<Comments>);
}
