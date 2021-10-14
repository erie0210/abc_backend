import { Test, TestingModule } from '@nestjs/testing';

import { Recipe } from './recipe.schema';
import { RecipeRepository } from './recipe.repository';
import { RecipeService } from './recipe.service';
import { RecipesController } from './recipe.controller';
import axios from 'axios';
import { getModelToken } from '@nestjs/mongoose';

describe('Recipe Controller 테스트', () => {
  let controller: RecipesController;
  let service: RecipeService;
  let repository: RecipeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RecipeService,
        RecipeRepository,
        { provide: getModelToken(Recipe.name), useFactory: () => {} },
      ],
      controllers: [RecipesController],
    }).compile();

    repository = await module.get<RecipeRepository>(RecipeRepository);
    service = await module.get<RecipeService>(RecipeService);
    controller = await module.get<RecipesController>(RecipesController);
  });

  describe('레시피 가져오기', () => {
    it('공개 레시피를 성공적으로 가져온다', async () => {
      const result = [];
      jest
        .spyOn(service, 'publicRecipe')
        .mockImplementation(async () => result);

      await controller.getPublicRecipe(1, 'createdAt');
      expect(service.publicRecipe).toHaveBeenCalled();
      expect(service.publicRecipe).toHaveBeenCalledTimes(1);
      expect(service.publicRecipe).toHaveBeenCalledWith(1, 'createdAt');
      expect(await controller.getPublicRecipe(1, 'createdAt')).toBe(result);
    });
    it('특정 유저의 특정 레시피를 성공적으로 가져온다', async () => {
      const result = [];
      jest
        .spyOn(service, 'privateRecipe')
        .mockImplementation(async () => result);

      await controller.getPrivateRecipe(
        'createdAt',
        '615922e075d9da472c64491a',
        1,
      );
      expect(service.privateRecipe).toHaveBeenCalled();
      expect(service.privateRecipe).toHaveBeenCalledTimes(1);
      expect(service.privateRecipe).toHaveBeenCalledWith(
        'createdAt',
        '615922e075d9da472c64491a',
        1,
      );
      expect(
        await controller.getPrivateRecipe(
          'createdAt',
          '615922e075d9da472c64491a',
          1,
        ),
      ).toBe(result);
      expect(controller).toBeDefined();
    });
    it('레시피 하나를 성공적으로 가져온다', async () => {
      let result;
      jest.spyOn(service, 'getRecipe').mockImplementation(async () => result);

      await controller.getOneRecipe('61542ddc808aeb33dcf4658d');
      expect(service.getRecipe).toHaveBeenCalled();
      expect(service.getRecipe).toHaveBeenCalledTimes(1);
      expect(service.getRecipe).toHaveBeenCalledWith(
        '61542ddc808aeb33dcf4658d',
      );
      expect(await controller.getOneRecipe('61542ddc808aeb33dcf4658d')).toBe(
        result,
      );
    });
  });

  describe('새로운 레시피 생성', () => {
    it('레시피를 성공적으로 생성한다', async () => {
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
      jest
        .spyOn(service, 'createRecipe')
        .mockImplementation(async () => result);

      await controller.createRecipe(newRecipe);
      expect(service.createRecipe).toHaveBeenCalled();
      expect(service.createRecipe).toHaveBeenCalledTimes(1);
      expect(service.createRecipe).toHaveBeenCalledWith(newRecipe);
      expect(await controller.createRecipe(newRecipe)).toBe(result);
    });
  });

  describe('레시피 업데이트', () => {
    it('레시피를 성공적으로 업데이트한다', async () => {
      // * 정상적으로 업데이트 되는 요소
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
      jest
        .spyOn(service, 'updateRecipe')
        .mockImplementation(async () => result);

      await controller.updateRecipe('615922e075d9da472c64491a', updateRecipe);
      expect(service.updateRecipe).toHaveBeenCalled();
      expect(service.updateRecipe).toHaveBeenCalledTimes(1);
      expect(service.updateRecipe).toHaveBeenCalledWith(
        '615922e075d9da472c64491a',
        updateRecipe,
      );
      expect(
        await controller.updateRecipe('615922e075d9da472c64491a', updateRecipe),
      ).toBe(result);
    });
  });

  describe('레시피 삭제하기', () => {
    it('레시피를 성공적으로 삭제한다', async () => {
      jest.spyOn(service, 'deleteRecipe').mockImplementation();

      await controller.deleteRecipe('615922e075d9da472c64491a');
      expect(service.deleteRecipe).toHaveBeenCalled();
      expect(service.deleteRecipe).toHaveBeenCalledTimes(1);
      expect(service.deleteRecipe).toHaveBeenCalledWith(
        '615922e075d9da472c64491a',
      );
    });
  });

  describe('레시피 검색', () => {
    it('레시피를 성공적으로 검색한다', async () => {
      const result = [];
      jest
        .spyOn(service, 'searchRecipe')
        .mockImplementation(async () => result);

      const body = {
        keyword: '빵',
        page: 1,
        sort: 'createdAt',
      };

      await controller.search(body);
      expect(service.searchRecipe).toHaveBeenCalled();
      expect(service.searchRecipe).toHaveBeenCalledTimes(1);
      expect(service.searchRecipe).toHaveBeenCalledWith('빵', 1, 'createdAt');
      expect(await controller.search(body)).toBe(result);
    });
  });

  describe('좋아요', () => {
    it('좋아요가 성공적으로 증가한다', async () => {
      let result;
      jest.spyOn(service, 'plusLike').mockImplementation(async () => result);

      await controller.plusLike('61542ddc808aeb33dcf4658d');
      expect(service.plusLike).toHaveBeenCalled();
      expect(service.plusLike).toHaveBeenCalledTimes(1);
      expect(service.plusLike).toHaveBeenCalledWith('61542ddc808aeb33dcf4658d');
      expect(await controller.plusLike('61542ddc808aeb33dcf4658d')).toBe(
        result,
      );
    });
    it('좋아요가 성공적으로 감소한다', async () => {
      let result;
      jest.spyOn(service, 'minusLike').mockImplementation(async () => result);

      await controller.minusLike('61542ddc808aeb33dcf4658d');
      expect(service.minusLike).toHaveBeenCalled();
      expect(service.minusLike).toHaveBeenCalledTimes(1);
      expect(service.minusLike).toHaveBeenCalledWith(
        '61542ddc808aeb33dcf4658d',
      );
      expect(await controller.minusLike('61542ddc808aeb33dcf4658d')).toBe(
        result,
      );
    });
  });
});
