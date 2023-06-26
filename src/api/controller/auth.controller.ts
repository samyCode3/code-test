import { Controller, Post, Body, Response } from '@nestjs/common';
import { AuthService } from '../../service/auth.service';
import { CreateDto, LoginDto } from '../../dto/user.dto';
import {ApiCreatedResponse, ApiOkResponse, ApiUnauthorizedResponse, ApiBody} from  '@nestjs/swagger'
@Controller('auth')
export class AuthController {
  constructor(private userService: AuthService) {}
  @Post('/create')
  @ApiCreatedResponse({ description : 'Register  User'})
  @ApiBody({type: CreateDto})
  async create(@Body() userDto: CreateDto, @Response() res) {
    try {
      const user = await this.userService.create(userDto);
      return res.status(user.status).json({ ...user });
    } catch (err) {
      return res.status(err.status).json({ ...err });
    }
  }

  @Post('/login')
  @ApiOkResponse({description : 'Login was succesfull'})
  @ApiUnauthorizedResponse({description : 'Incorrect Email or Password'})
  @ApiBody({type : LoginDto})
  async login(@Body() loginDto: LoginDto, @Response() res) {
    try {
      const user = await this.userService.login(loginDto);
      return res.status(user.status).json({ ...user });
    } catch (err) {
      return res.status(err.status).json({ ...err });
    }
  }
}
