import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateItinerariesDto {
  @IsString()
  @IsNotEmpty()
  readonly departure: string;
  @IsString()
  @IsNotEmpty()
  readonly layover: string;
  @IsString()
  @IsNotEmpty()
  readonly arrived: string;
}

export class UpdateItinerariesDto extends PartialType(CreateItinerariesDto) {}
