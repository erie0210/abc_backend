import { LikesDto } from './dto/likes.dto';
import { LikesRepository } from './likes.repository';
export declare class LikesService {
    private readonly likesRepository;
    constructor(likesRepository: LikesRepository);
    plusLikes(like: LikesDto): Promise<import("./likes.schema").Likes>;
    minusLikes(like: LikesDto): Promise<import("./likes.schema").Likes>;
}
