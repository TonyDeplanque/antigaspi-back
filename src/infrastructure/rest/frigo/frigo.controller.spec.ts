import { Test, TestingModule } from '@nestjs/testing';
import { FrigoController } from './frigo.controller';

describe('FrigoController', () => {
  let controller: FrigoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FrigoController],
    }).compile();

    controller = module.get<FrigoController>(FrigoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
