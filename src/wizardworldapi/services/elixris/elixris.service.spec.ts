import { Test, TestingModule } from '@nestjs/testing';
import { ElixrisService } from './elixris.service';

describe('ElixrisService', () => {
  let service: ElixrisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ElixrisService],
    }).compile();

    service = module.get<ElixrisService>(ElixrisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
