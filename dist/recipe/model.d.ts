export declare type RecipeType = {
    id: number;
    boardNum: number;
    title: string;
    authorID: number;
    createAt: string;
    updateAt: string;
    share: boolean;
    views: number;
    comments: Array<object>;
    likes: number;
    body: string;
    picture: string;
    nutrition: object;
    stars: number;
    ingredient: Array<Object>;
};
export declare const Recipe: RecipeType[];
