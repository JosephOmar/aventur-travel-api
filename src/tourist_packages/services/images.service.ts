import { Injectable, NotFoundException } from '@nestjs/common';
import { Image } from '../entities/image.entity';
import { randomUUID } from 'crypto';
import { CreateImagesDto, UpdateImagesDto } from '../dtos/images.dto';

@Injectable()
export class ImagesService {
  private images: Image[] = [
    {
      image_id: randomUUID(),
      url: 'enlace.com',
      alt: 'Esta es una imagen de prueba',
    },
  ];

  getAllImages() {
    return this.images;
  }

  getOneImage(imageId: string) {
    const image = this.images.find((image) => image.image_id === imageId);
    if (!image) {
      throw new NotFoundException(`image ${imageId} not found`);
    }
    return image;
  }

  getIndexImage(imageId: string) {
    console.log(imageId + 'xd');
    const index = this.images.findIndex((image) => image.image_id === imageId);
    if (index === -1) {
      throw new NotFoundException(`Image ${imageId} not found`);
    }
    return index;
  }

  createImage(payload: CreateImagesDto) {
    const newImage = {
      image_id: randomUUID(),
      ...payload,
    };
    this.images.push(newImage);
    return newImage;
  }

  updateImage(payload: UpdateImagesDto, imageId: string) {
    const image = this.getOneImage(imageId);
    const index = this.getIndexImage(imageId);
    this.images[index] = {
      ...image,
      ...payload,
    };
    return this.images[index];
  }

  deleteImage(imageId: string) {
    const index = this.getIndexImage(imageId);
    this.images.splice(index, 1);
    return { message: `Image ${imageId} deleted` };
  }
}
