import { Test, TestingModule } from '@nestjs/testing';
import { CountingService } from './counting.service';

describe('CountingService', () => {
  let service: CountingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountingService],
    }).compile();

    service = module.get<CountingService>(CountingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
