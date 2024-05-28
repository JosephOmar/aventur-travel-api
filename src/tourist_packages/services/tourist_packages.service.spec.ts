import { Test, TestingModule } from '@nestjs/testing';
import { TouristPackagesService } from './tourist_packages.service';

describe('TouristPackagesService', () => {
  let service: TouristPackagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TouristPackagesService],
    }).compile();

    service = module.get<TouristPackagesService>(TouristPackagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
