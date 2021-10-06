import { Comments } from './comments.schema';
import { CommentsCreateDto } from './dto/comments.create.dto';
import { Model } from 'mongoose';
import { RecipeRepository } from 'src/recipe/recipe.repository';
import { UsersRepository } from 'src/users/users.repository';
import { BakeryRepository } from 'src/bakery/bakery.repository';
export declare class CommentsService {
    private readonly commentsModel;
    private readonly recipeRepository;
    private readonly usersRepository;
    private readonly bakeryRepository;
    constructor(commentsModel: Model<Comments>, recipeRepository: RecipeRepository, usersRepository: UsersRepository, bakeryRepository: BakeryRepository);
    createComment(id: string, commentData: CommentsCreateDto): Promise<Comments>;
    saveBakeryComment(id: string, commentData: CommentsCreateDto): Promise<Comments>;
    saveComment(id: string, commentData: CommentsCreateDto): Promise<Comments>;
    findComment(id: string): Promise<Comments>;
    deleteComment(id: string): Promise<Comments>;
}
