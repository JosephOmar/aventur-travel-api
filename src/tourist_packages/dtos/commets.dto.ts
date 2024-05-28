import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateCommentsDto {
  @IsString()
  @IsNotEmpty()
  @IsUrl()
  readonly profile: string;
  @IsString()
  @IsNotEmpty()
  readonly content: string;
  @IsString()
  @IsNotEmpty()
  readonly date: string;
}

export class UpdateCommentsDto extends PartialType(CreateCommentsDto) {}
