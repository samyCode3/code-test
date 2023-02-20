import { Test, TestingModule } from '@nestjs/testing';
import { ElixrisController } from './elixris.controller';

describe('ElixrisController', () => {
  let controller: ElixrisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ElixrisController],
    }).compile();

    controller = module.get<ElixrisController>(ElixrisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
