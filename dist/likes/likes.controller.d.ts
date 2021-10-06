import { LikesDto } from './dto/likes.dto';
import { LikesService } from './likes.service';
export declare class LikesController {
    private readonly likesService;
    constructor(likesService: LikesService);
    plusLikes(body: LikesDto): Promise<import("./likes.schema").Likes>;
    minusLikes(body: LikesDto): Promise<import("./likes.schema").Likes>;
}
