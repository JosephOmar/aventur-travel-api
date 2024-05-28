import { Injectable } from '@nestjs/common';
import { Image } from '../entities/images.entity';
import { randomUUID } from 'crypto';

@Injectable()
export class ImagesService {
  private images: Image[] = [
    {
      image_id: randomUUID(),
      url: 'enlace.com',
      alt: 'Esta es una imagen de prueba',
    },
  ];

  
}
