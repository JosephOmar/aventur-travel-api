import { Injectable, NotFoundException } from '@nestjs/common';
import { Price } from '../entities/price.entity';
import { randomUUID } from 'crypto';
import { CreatePricesDto, UpdatePricesDto } from '../dtos/prices.dto';
@Injectable()
export class PricesService {
  private prices: Price[] = [
    {
      price_id: randomUUID(),
      amount: 900,
      currency: 'PEN',
    },
  ];

  getAllPrices() {
    return this.prices;
  }

  getOnePrice(priceId: string) {
    const price = this.prices.find((price) => price.price_id === priceId);
    if (!price) {
      throw new NotFoundException(`price ${priceId} not found`);
    }
    return price;
  }

  getIndexPrice(priceId: string) {
    const index = this.prices.findIndex((price) => price.price_id === priceId);
    if (index === -1) {
      throw new NotFoundException(`price ${priceId} not found`);
    }
    return index;
  }

  createPrice(payload: CreatePricesDto) {
    const price = {
      price_id: randomUUID(),
      ...payload,
    };
    this.prices.push(price);
    return price;
  }

  updatePrice(payload: UpdatePricesDto, priceId: string) {
    const price = this.getOnePrice(priceId);
    const index = this.getIndexPrice(priceId);
    this.prices[index] = {
      ...price,
      ...payload,
    };
    return this.prices[index];
  }

  deletePrice(priceId: string) {
    const index = this.getIndexPrice(priceId);
    this.prices.splice(index, 1);
    return { message: `price ${priceId} deleted` };
  }
}
