import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class ElixrisDTO {
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'difficulty' })
  difficulty: string;
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'name' })
  name: string;
}
