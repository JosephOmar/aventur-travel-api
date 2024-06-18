import { IsString, IsUrl, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateAgentsDto {
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
  @IsUrl()
  @IsNotEmpty()
  readonly profile: string;
}

export class UpdateAgentsDto extends PartialType(CreateAgentsDto) {}
