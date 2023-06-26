/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"
export class  categoryDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({type : String, description: "name"})
    public name : string
}

export class SearchDto {
    @IsString()
    @ApiProperty({type : String, description: "name"})
    public name : string
}

export class GetById {
    @IsString()
    @ApiProperty({type : String, description: "name"})
    public id : string
}