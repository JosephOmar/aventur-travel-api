import { Test, TestingModule } from '@nestjs/testing';
import { TouristPackagesController } from './tourist_packages.controller';

describe('TouristPackagesController', () => {
  let controller: TouristPackagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TouristPackagesController],
    }).compile();

    controller = module.get<TouristPackagesController>(
      TouristPackagesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
