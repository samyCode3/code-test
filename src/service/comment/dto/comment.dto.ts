/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty } from 'class-validator';

export class commentDto {
  @IsString()
  @IsNotEmpty()
  postId: string;
  @IsString()
  @IsNotEmpty()
  comment: string;
}

export class updateDto {
  @IsString()
  @IsNotEmpty()
  comment: string;
}
