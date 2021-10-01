export type RecipeType = {
  id: number;
  boardNum: number; // 게시판번호
  title: string;
  authorID: number;
  createAt: string; // Date
  updateAt: string; // Date
  share: boolean;
  views: number;
  comments: Array<object>;
  likes: number;
  body: string;
  picture: string; // s3 url
  nutrition: object; // redefine NutritionInfoType
  stars: number;
  ingredient: Array<Object>; // redefine ingredient
};

export const Recipe: RecipeType[] = [
  {
    id: 0,
    boardNum: 0,
    title: 'recipe 0',
    authorID: 0,
    createAt: 'Thu Sep 16 2021 15:15:50 GMT+0900 (한국 표준시)',
    updateAt: 'Thu Sep 16 2021 15:15:50 GMT+0900 (한국 표준시)',
    share: true,
    views: 14,
    comments: [
      {
        author: 'jayz',
        body: 'hello this is comment',
      },
    ],
    likes: 2,
    body: 'recipe for joie to jayz',
    picture:
      'https://joieepersonals3.s3.ap-northeast-2.amazonaws.com/52163_52859_5928.jpg',
    nutrition: {
      carbon: 14,
      protein: 4,
      fat: 5,
      sugar: 6,
    },
    stars: 3,
    ingredient: [
      {
        ingredient_name: '우유',
        gram: 120,
        partion: 80,
      },
    ],
  },
  {
    id: 1,
    boardNum: 1,
    title: 'recipe 11',
    authorID: 1,
    createAt: 'Thu Sep 16 2021 15:15:50 GMT+0900 (한국 표준시)',
    updateAt: 'Thu Sep 16 2021 15:15:50 GMT+0900 (한국 표준시)',
    share: false,
    views: 1,
    comments: [
      {
        author: 'jayz',
        body: 'hello this is comment',
      },
    ],
    likes: 2,
    body: 'recipe for joie to jayz',
    picture:
      'https://joieepersonals3.s3.ap-northeast-2.amazonaws.com/52163_52859_5928.jpg',
    nutrition: {
      carbon: 14,
      protein: 4,
      fat: 5,
      sugar: 6,
    },
    stars: 3,
    ingredient: [
      {
        ingredient_name: '우유',
        gram: 120,
        partion: 80,
      },
    ],
  },
  {
    id: 2,
    boardNum: 0,
    title: 'recipe 2',
    authorID: 2,
    createAt: 'Thu Sep 16 2021 15:15:50 GMT+0900 (한국 표준시)',
    updateAt: 'Thu Sep 16 2021 15:15:50 GMT+0900 (한국 표준시)',
    share: true,
    views: 14,
    comments: [
      {
        author: 'jayz',
        body: 'hello this is comment',
      },
    ],
    likes: 2,
    body: 'recipe for joie to jayz',
    picture:
      'https://joieepersonals3.s3.ap-northeast-2.amazonaws.com/52163_52859_5928.jpg',
    nutrition: {
      carbon: 14,
      protein: 4,
      fat: 5,
      sugar: 6,
    },
    stars: 3,
    ingredient: [
      {
        ingredient_name: '우유',
        gram: 120,
        partion: 80,
      },
    ],
  },
  {
    id: 3,
    boardNum: 3,
    title: 'recipe 3',
    authorID: 3,
    createAt: 'Thu Sep 16 2021 15:15:50 GMT+0900 (한국 표준시)',
    updateAt: 'Thu Sep 16 2021 15:15:50 GMT+0900 (한국 표준시)',
    share: true,
    views: 14,
    comments: [
      {
        author: 'jayz',
        body: 'hello this is comment',
      },
    ],
    likes: 2,
    body: 'recipe for joie to jayz',
    picture:
      'https://joieepersonals3.s3.ap-northeast-2.amazonaws.com/52163_52859_5928.jpg',
    nutrition: {
      carbon: 14,
      protein: 4,
      fat: 5,
      sugar: 6,
    },
    stars: 3,
    ingredient: [
      {
        ingredient_name: '우유',
        gram: 120,
        partion: 80,
      },
    ],
  },
  {
    id: 4,
    boardNum: 4,
    title: 'recipe 4',
    authorID: 4,
    createAt: 'Thu Sep 16 2021 15:15:50 GMT+0900 (한국 표준시)',
    updateAt: 'Thu Sep 16 2021 15:15:50 GMT+0900 (한국 표준시)',
    share: true,
    views: 14,
    comments: [
      {
        author: 'jayz',
        body: 'hello this is comment',
      },
    ],
    likes: 2,
    body: 'recipe for joie to jayz',
    picture:
      'https://joieepersonals3.s3.ap-northeast-2.amazonaws.com/52163_52859_5928.jpg',
    nutrition: {
      carbon: 14,
      protein: 4,
      fat: 5,
      sugar: 6,
    },
    stars: 3,
    ingredient: [
      {
        ingredient_name: '우유',
        gram: 120,
        partion: 80,
      },
    ],
  },
];
