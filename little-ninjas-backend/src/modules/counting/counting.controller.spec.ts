import { Test, TestingModule } from '@nestjs/testing';
import { CountingController } from './counting.controller';

describe('CountingController', () => {
  let controller: CountingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CountingController],
    }).compile();

    controller = module.get<CountingController>(CountingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
