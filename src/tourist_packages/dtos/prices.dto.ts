import { PartialType } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CreatePricesDto {
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  amount: number;
  @IsString()
  @IsNotEmpty()
  currency: string;
}

export class UpdatePricesDto extends PartialType(CreatePricesDto) {}
