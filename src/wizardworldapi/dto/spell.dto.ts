import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class createSpell {
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'title' })
  title: string;
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'spells' })
  spells: string;
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'wizardInt' })
  wizardId: number;
}
