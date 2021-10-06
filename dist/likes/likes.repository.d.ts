import { Model } from 'mongoose';
import { LikesDto } from './dto/likes.dto';
import { Likes } from './likes.schema';
export declare class LikesRepository {
    private readonly likesModel;
    constructor(likesModel: Model<Likes>);
    plusLike(like: LikesDto): Promise<Likes>;
    minusLike(like: LikesDto): Promise<Likes>;
    getLike(like: LikesDto): Promise<Likes[]>;
}
