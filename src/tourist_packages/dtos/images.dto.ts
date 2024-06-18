import { PartialType } from '@nestjs/swagger';
import { IsString, IsUrl, IsNotEmpty } from 'class-validator';

export class CreateImagesDto {
  @IsString()
  @IsNotEmpty()
  @IsUrl()
  url: string;
  @IsString()
  @IsNotEmpty()
  alt: string;
}

export class UpdateImagesDto extends PartialType(CreateImagesDto) {}
