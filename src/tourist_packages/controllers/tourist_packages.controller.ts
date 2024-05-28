import { Controller, Get, Param } from '@nestjs/common';

@Controller('tourist-packages')
export class TouristPackagesController {
  @Get()
  getPackages() {
    return `Todos los packages`;
  }

  @Get(':packageId')
  findPackage(@Param('packageId') packageId: string) {
    return `Package con Id => ${packageId}`;
  }
}
