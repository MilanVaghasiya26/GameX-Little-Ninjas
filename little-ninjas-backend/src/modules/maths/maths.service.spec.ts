import { Test, TestingModule } from '@nestjs/testing';
import { MathsService } from './maths.service';

describe('MathsService', () => {
  let service: MathsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MathsService],
    }).compile();

    service = module.get<MathsService>(MathsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
