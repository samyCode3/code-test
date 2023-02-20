import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateWizard {
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'first_name' })
  first_name: string;
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'last_name' })
  last_name: string;
}
