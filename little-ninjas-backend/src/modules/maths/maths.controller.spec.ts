import { Test, TestingModule } from '@nestjs/testing';
import { MathsController } from './maths.controller';

describe('MathsController', () => {
  let controller: MathsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MathsController],
    }).compile();

    controller = module.get<MathsController>(MathsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
