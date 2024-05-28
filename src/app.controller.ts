import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hola Mundo!';
  }

  @Get('nuevo')
  newEndpoing() {
    return 'yo soy nuevo';
  }

  @Get('/ruta/')
  nuevo() {
    return 'yo soy nuevo x2';
  }

  @Get('products')
  getProducts(
    @Query('limit') limit: number = 100,
    @Query('offset') offset: number = 0,
    @Query('brand') brand: number,
  ) {
    return `products: limit => ${limit} , offset => ${offset}, brand => ${brand}`;
  }

  @Get('products/filter')
  getProductFilter() {
    return 'Yo soy un filter';
  }

  @Get('products/:id')
  getProductId(@Param('id') id: string) {
    return `Product ${id}`;
  }

  @Get('categories/:categoryId/products/:productId')
  getCategory(
    @Param('categoryId') categoryId: string,
    @Param('productId') productId: string,
  ) {
    return `categories ${categoryId} and product ${productId}`;
  }
}
