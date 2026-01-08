import { Test, TestingModule } from '@nestjs/testing';
import { PatnersController } from './patners.controller';

describe('PatnersController', () => {
  let controller: PatnersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PatnersController],
    }).compile();

    controller = module.get<PatnersController>(PatnersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
