import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from 'src/auth/auth.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { Users } from './users.schema';
import { UsersService } from './users.service';

describe('User Controller 테스트', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: AuthService,
          useValue: {
            registerUserAsync: jest.fn(),
          },
        },
        {
          provide: UsersService,
          useValue: {
            updateUser: jest.fn(),
          },
        },
      ],
      controllers: [UsersController],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = await module.get<UsersService>(UsersService);
  });

  it('controller를 로드한다 (should be defined)', () => {
    expect(controller).toBeDefined();
  });

  it('회원 정보를 성공적으로 수정한다', async () => {
    let result ;
    jest.spyOn(service, 'updateUser').mockImplementation(async () => result);

    const id = {
      userId: '615922e075d9da472c64491a',
    };
    const body = {
      nickname: 'garry',
      passwd: '1234',
    };
    await controller.updateUser(id, body);
    expect(service.updateUser).toHaveBeenCalled()
    expect(service.updateUser).toHaveBeenCalledTimes(1);
    expect(service.updateUser).toHaveBeenCalledWith(id, body);
    expect(await controller.updateUser(id, body)).toBe(result);
  });
});
