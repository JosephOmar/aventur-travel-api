import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSegmentsDto {
  @IsString()
  @IsNotEmpty()
  readonly primary: string;
  @IsString()
  @IsNotEmpty()
  readonly secondary: string;
}

export class UpdateSegmentsDto extends PartialType(CreateSegmentsDto) {}
