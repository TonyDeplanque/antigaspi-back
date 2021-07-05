import { Test, TestingModule } from '@nestjs/testing';
import { AlimentController } from './aliment.controller';

describe('AlimentController', () => {
  let controller: AlimentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlimentController],
    }).compile();

    controller = module.get<AlimentController>(AlimentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
