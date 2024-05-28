import { Controller, Get, Param } from '@nestjs/common';

@Controller('transportation')
export class TransportationController {
  @Get()
  getTransportation() {
    return `Todos los transportation`;
  }

  @Get(':transportationId')
  findTransportation(@Param('transportationId') transportationId: string) {
    return `Transportation con Id => ${transportationId}`;
  }
}
