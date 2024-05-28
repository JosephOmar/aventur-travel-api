import { IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUsersDtos {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly lastname: string;
  @IsString()
  @IsNotEmpty()
  readonly phone: string;
  @IsString()
  @IsNotEmpty()
  readonly mail: string;
  @IsString()
  @IsNotEmpty()
  @IsUrl()
  readonly profile: string;
}

export class UpdateUsersDtos extends PartialType(CreateUsersDtos) {}
