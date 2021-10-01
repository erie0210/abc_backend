import { CommentsService } from './comments.service';
import { CommentsCreateDto } from './dto/comments.create.dto';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    saveComment(id: string, body: CommentsCreateDto): Promise<import("./comments.schema").Comments>;
    getComment(id: string): Promise<import("./comments.schema").Comments>;
    deleteComment(id: string): Promise<import("./comments.schema").Comments>;
}
