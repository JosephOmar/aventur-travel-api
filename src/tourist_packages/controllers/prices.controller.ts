import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { PricesService } from '../services/prices.service';
import { CreatePricesDto, UpdatePricesDto } from '../dtos/prices.dto';

@Controller('prices')
export class PricesController {
  constructor(private priceService: PricesService) {}

  @Get()
  getPrices() {
    return this.priceService.getAllPrices();
  }

  @Get(':priceId')
  findprice(@Param('priceId') priceId: string) {
    return this.priceService.getOnePrice(priceId);
  }

  @Post()
  createprice(@Body() payload: CreatePricesDto) {
    return this.priceService.createPrice(payload);
  }

  @Put(':priceId')
  updateprice(
    @Body() payload: UpdatePricesDto,
    @Param('priceId') priceId: string,
  ) {
    return this.priceService.updatePrice(payload, priceId);
  }

  @Delete(':priceId')
  deleteprice(@Param('priceId') priceId: string) {
    return this.priceService.deletePrice(priceId);
  }
}
