import { Controller, Get, Param } from '@nestjs/common';

@Controller('images')
export class ImagesController {
  @Get()
  getImages() {
    return `Todas las images`;
  }

  @Get(':imagenId')
  findImagen(@Param('imagenId') imagenId: string) {
    return `Imagen con Id => ${imagenId}`;
  }
}
