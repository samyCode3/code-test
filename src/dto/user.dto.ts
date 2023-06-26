/* eslint-disable prettier/prettier */
import {IsString, IsNotEmpty, IsEmail, MinLength, MaxLength} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'

export class CreateDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(40) 
    @ApiProperty({type :String, description : 'fullname'}) 
    public fullname : string;
    @IsString()
    @IsNotEmpty() 
    @IsEmail()
    @ApiProperty({type :String, description : 'email'}) 
    public email : string;
    @IsString()
    @IsNotEmpty() 
    @MinLength(8)
    @MaxLength(40) 
    @ApiProperty({type :String, description : 'password'}) 
    public password : string;

}

export class  LoginDto {
    @IsString()
    @IsNotEmpty() 
    @IsEmail()
    @ApiProperty({type :String, description : 'email'}) 
    public email : string;
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(40) 
    @ApiProperty({type :String, description : 'password'})   
    public password : string;
}
