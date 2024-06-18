import { PartialType } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreatePackagesDto {
  @IsString()
  @IsNotEmpty()
  slug: string;
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  descripcion_title: string;
  @IsString()
  @IsNotEmpty()
  destination: string;
  @IsString()
  @IsNotEmpty()
  description_destination: string;
  @IsArray()
  @IsNotEmpty()
  itinery_description: string[];
  @IsArray()
  @IsNotEmpty()
  details: string[];
  @IsArray()
  @IsNotEmpty()
  considerations: string[];
  @IsArray()
  @IsNotEmpty()
  aditional_services: string[];
}

export class UpdatePackagesDto extends PartialType(CreatePackagesDto) {}
