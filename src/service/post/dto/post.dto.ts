/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class postDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  content: string;
}

export class updateDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  title: string;
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  content: string;
}
