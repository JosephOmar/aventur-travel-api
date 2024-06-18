import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Body,
} from '@nestjs/common';
import { TransportationService } from '../services/transportation.service';
import {
  CreateTransportationDto,
  UpdateTransportationDto,
} from '../dtos/transportation.dto';

@Controller('transportation')
export class TransportationController {
  constructor(private transportationService: TransportationService) {}
  @Get()
  getTransportation() {
    return this.transportationService.getAllTransportation();
  }

  @Get(':transportationId')
  findTransportation(@Param('transportationId') transportationId: string) {
    return this.transportationService.getOneTransportation(transportationId);
  }

  @Post()
  createTransportation(@Body() payload: CreateTransportationDto) {
    return this.transportationService.createTransportation(payload);
  }

  @Put(':transportationId')
  updateTransportation(
    @Body() payload: UpdateTransportationDto,
    @Param('transportationId') transportationId: string,
  ) {
    return this.transportationService.updateTransportation(
      payload,
      transportationId,
    );
  }

  @Delete(':transportationId')
  deleteTransportation(@Param('transportationId') transportationId: string) {
    return this.transportationService.deleteTransportation(transportationId);
  }
}
