import { Controller, Get, Param } from '@nestjs/common';

@Controller('prices')
export class PricesController {
  @Get()
  getPrices() {
    return `Todos los prices`;
  }

  @Get(':priceId')
  findPrice(@Param('priceId') priceId: string) {
    return `Price con Id => ${priceId}`;
  }
}
