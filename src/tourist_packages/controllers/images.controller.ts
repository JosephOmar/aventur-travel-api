import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ImagesService } from '../services/images.service';
import { CreateImagesDto, UpdateImagesDto } from '../dtos/images.dto';

@Controller('images')
export class ImagesController {
  constructor(private imagesService: ImagesService) {}
  @Get()
  getImages() {
    return this.imagesService.getAllImages();
  }

  @Get(':imageId')
  findImage(@Param('imageId') imageId: string) {
    return this.imagesService.getOneImage(imageId);
  }

  @Post()
  createImage(@Body() payload: CreateImagesDto) {
    return this.imagesService.createImage(payload);
  }

  @Put(':imageId')
  updateImage(
    @Body() payload: UpdateImagesDto,
    @Param('imageId') imageId: string,
  ) {
    return this.imagesService.updateImage(payload, imageId);
  }

  @Delete(':imageId')
  deleteImage(@Param('imageId') imageId: string) {
    return this.imagesService.deleteImage(imageId);
  }
}
