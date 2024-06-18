import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTransportationDto {
  @IsString()
  @IsNotEmpty()
  supplier: string;
  @IsString()
  @IsNotEmpty()
  payment_type: string;
}

export class UpdateTransportationDto extends PartialType(
  CreateTransportationDto,
) {}
