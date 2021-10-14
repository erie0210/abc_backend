import { Test, TestingModule } from '@nestjs/testing';

import { Recipe } from './recipe.schema';
import { RecipeRepository } from './recipe.repository';
import { RecipeService } from './recipe.service';
import { RecipesController } from './recipe.controller';
import { getModelToken } from '@nestjs/mongoose';

const recipe: Recipe[] = [];

describe('Recipe Service 테스트', () => {
  let service: RecipeService;
  let repository: RecipeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RecipeService,
        RecipeRepository,
        {
          provide: getModelToken(Recipe.name),
          useFactory: () => {},
        },
      ],
    }).compile();

    service = await module.get<RecipeService>(RecipeService);
    repository = await module.get<RecipeRepository>(RecipeRepository);
  });

  describe('레시피 가져오기', () => {
    it('공개 레시피를 성공적으로 가져온다', async () => {
      const result = [];
      jest
        .spyOn(repository, 'findPublic')
        .mockImplementation(async () => result);

      await service.publicRecipe(1, 'createdAt');

      expect(repository.findPublic).toHaveBeenCalled();
      expect(repository.findPublic).toHaveBeenCalledTimes(1);
      expect(repository.findPublic).toHaveBeenCalledWith(1, 'createdAt');
      expect(await service.publicRecipe(1, 'createdAt')).toBe(result);
    });
    it('공개 레시피 가져오기 에러처리', async () => {
      const t = await service.publicRecipe(0, 'createdAt');
      expect(t).rejects.toMatchObject({ statusCode: 500 });
    });
    it('특정 유저의 레시피를 성공적으로 가져온다', async () => {
      const result = [];
      jest
        .spyOn(repository, 'findByUser')
        .mockImplementation(async () => result);

      await service.privateRecipe('createdAt', '615922e075d9da472c64491a', 1);
      expect(repository.findByUser).toHaveBeenCalled();
      expect(repository.findByUser).toHaveBeenCalledTimes(1);
      expect(repository.findByUser).toHaveBeenCalledWith(
        '615922e075d9da472c64491a',
        1,
        'createdAt',
      );
      expect(
        await service.privateRecipe('createdAt', '615922e075d9da472c64491a', 1),
      ).toBe(result);
    });
    it('특정 레시피를 성공적으로 가져온다.', async () => {
      let result;
      jest.spyOn(repository, 'findById').mockImplementation(async () => result);

      await service.getRecipe('61542ddc808aeb33dcf4658d');
      expect(repository.findById).toHaveBeenCalled();
      expect(repository.findById).toHaveBeenCalledTimes(1);
      expect(repository.findById).toHaveBeenCalledWith(
        '61542ddc808aeb33dcf4658d',
      );
      expect(await service.getRecipe('61542ddc808aeb33dcf4658d')).toBe(result);
    });
  });

  describe('레시피 생성하기', () => {
    it('공개 레시피를 성공적으로 생성한다', async () => {
      const newRecipe = {
        share: true,
        view: 1,
        comments: [],
        likes: 1,
        title: '레시피 생성 예제 타이틀',
        contents: '레시피 생성 예제 컨텐츠',
        pictures: [
          'https://truffle-assets.imgix.net/4668bbc0-funfetti-freakshake-cupcakes-lc.jpg',
        ],
        star: 3,
        ingredients: [],
        nutrition: [],
        author: '615922e075d9da472c64491a',
      };

      let result;
      jest.spyOn(repository, 'create').mockImplementation(async () => result);

      await service.createRecipe(newRecipe);
      expect(repository.create).toHaveBeenCalled();
      expect(repository.create).toHaveBeenCalledTimes(1);
      // expect(repository.create).toHaveBeenCalledWith(newRecipe);
      expect(await service.createRecipe(newRecipe)).toBe(result);
    });
  });

  describe('레시피 업데이트', () => {
    it('공개 레시피를 성공적으로 업데이트 한다', async () => {
      const updateRecipe = {
        share: true,
        contents: '레시피 업데이트 예제 컨텐츠',
        pictures: [
          'https://cdn.pixabay.com/photo/2021/08/03/07/03/orange-6518675_960_720.jpg',
        ],
        star: 2,
      };
      // * 업데이트 요소: 공유여부, 컨텐츠, 사진, 별점 중 하나가 빠져있을 때 에러발생
      const updateErrorList = [
        {
          contents: '레시피 업데이트 예제 컨텐츠',
          pictures: [
            'https://cdn.pixabay.com/photo/2021/08/03/07/03/orange-6518675_960_720.jpg',
          ],
          star: 2,
        },
        {
          share: true,
          pictures: [
            'https://cdn.pixabay.com/photo/2021/08/03/07/03/orange-6518675_960_720.jpg',
          ],
          star: 2,
        },
        {
          share: true,
          contents: '레시피 업데이트 예제 컨텐츠',
          star: 2,
        },
        {
          share: true,
          contents: '레시피 업데이트 예제 컨텐츠',
          pictures: [
            'https://cdn.pixabay.com/photo/2021/08/03/07/03/orange-6518675_960_720.jpg',
          ],
        },
      ];

      let result;
      jest.spyOn(repository, 'update').mockImplementation(async () => result);

      await service.updateRecipe('615922e075d9da472c64491a', updateRecipe);
      expect(repository.update).toHaveBeenCalled();
      expect(repository.update).toHaveBeenCalledTimes(1);
      expect(repository.update).toHaveBeenCalledWith(
        '615922e075d9da472c64491a',
        updateRecipe,
      );
      expect(
        await service.updateRecipe('615922e075d9da472c64491a', updateRecipe),
      ).toBe(result);
    });
  });

  describe('레시피 삭제', () => {
    it('공개 레시피를 성공적으로 삭제한다', async () => {
      let result;
      jest.spyOn(repository, 'delete').mockImplementation(async () => result);

      await service.deleteRecipe('615922e075d9da472c64491a');
      expect(repository.delete).toHaveBeenCalled();
      expect(repository.delete).toHaveBeenCalledTimes(1);
      expect(repository.delete).toHaveBeenCalledWith(
        '615922e075d9da472c64491a',
      );
    });
  });

  describe('레시피 검색', () => {
    it('공개 레시피를 성공적으로 검색한다', async () => {
      let result;
      jest
        .spyOn(repository, 'findByKeyword')
        .mockImplementation(async () => result);

      await service.searchRecipe('빵', 1, 'createdAt');
      expect(repository.findByKeyword).toHaveBeenCalled();
      expect(repository.findByKeyword).toHaveBeenCalledTimes(1);
      expect(repository.findByKeyword).toHaveBeenCalledWith(
        '빵',
        1,
        'createdAt',
      );
      expect(await service.searchRecipe('빵', 1, 'createdAt')).toBe(result);
    });
  });

  describe('좋아요', () => {
    it('좋아요를 성공적으로 증가시킨다.', async () => {
      let result;
      jest.spyOn(repository, 'findById').mockImplementation(async () => result);

      await service.plusLike('61542e3cd36fc3125cc967f8');
      expect(repository.findById).toHaveBeenCalled();
      expect(repository.findById).toHaveBeenCalledTimes(1);
      expect(repository.findById).toHaveBeenCalledWith(
        '61542e3cd36fc3125cc967f8',
      );
      expect(await service.plusLike('61542e3cd36fc3125cc967f8')).toBe(result);
    });
    it('좋아요를 성공적으로 감소시킨다', async () => {
      let result;
      jest.spyOn(repository, 'findById').mockImplementation(async () => result);

      await service.minusLike('61542e3cd36fc3125cc967f8');
      expect(repository.findById).toHaveBeenCalled();
      expect(repository.findById).toHaveBeenCalledTimes(1);
      expect(repository.findById).toHaveBeenCalledWith(
        '61542e3cd36fc3125cc967f8',
      );
      expect(await service.minusLike('61542e3cd36fc3125cc967f8')).toBe(result);
    });
  });
});
