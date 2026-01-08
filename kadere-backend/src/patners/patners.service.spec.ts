import { Test, TestingModule } from '@nestjs/testing';
import { PatnersService } from './patners.service';

describe('PatnersService', () => {
  let service: PatnersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatnersService],
    }).compile();

    service = module.get<PatnersService>(PatnersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
