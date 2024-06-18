import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Body,
} from '@nestjs/common';
import { TouristPackagesService } from '../services/tourist_packages.service';
import {
  CreatePackagesDto,
  UpdatePackagesDto,
} from '../dtos/tourist_packages.dto';
@Controller('tourist-packages')
export class TouristPackagesController {
  constructor(private touristPackagesService: TouristPackagesService) {}
  @Get()
  getPackages() {
    return this.touristPackagesService.getAllPackages();
  }

  @Get(':packageId')
  findPackage(@Param('packageId') packageId: string) {
    return this.touristPackagesService.getOnePackage(packageId);
  }

  @Post()
  createPackage(@Body() payload: CreatePackagesDto) {
    return this.touristPackagesService.createPackage(payload);
  }

  @Put(':packageId')
  updatePackage(
    @Body() payload: UpdatePackagesDto,
    @Param('packageId') packageId: string,
  ) {
    return this.touristPackagesService.updatePackage(payload, packageId);
  }

  @Delete(':packageId')
  deletePackage(@Param('packageId') packageId: string) {
    return this.touristPackagesService.deletePackage(packageId);
  }
}
