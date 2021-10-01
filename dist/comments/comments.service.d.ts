import { Comments } from './comments.schema';
import { CommentsCreateDto } from './dto/comments.create.dto';
import { Model } from 'mongoose';
import { RecipeRepository } from 'src/recipe/recipe.repository';
import { UsersRepository } from 'src/users/users.repository';
export declare class CommentsService {
    private readonly commentsModel;
    private readonly recipeRepository;
    private readonly usersRepository;
    constructor(commentsModel: Model<Comments>, recipeRepository: RecipeRepository, usersRepository: UsersRepository);
    createComment(id: string, commentData: CommentsCreateDto): Promise<Comments>;
    saveComment(id: string, commentData: CommentsCreateDto): Promise<Comments>;
    findComment(id: string): Promise<Comments>;
    deleteComment(id: string): Promise<Comments>;
}
