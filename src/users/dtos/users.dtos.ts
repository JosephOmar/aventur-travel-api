import { IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateUsersDtos {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'The name of User' })
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
