import {
  Controller,
  Param,
  Res,
  Req,
  Body,
  Post,
  Get,
  Put,
  Delete,
  ParseIntPipe,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { ElixrisService } from '../../services/elixris/elixris.service';
import { Request, Response } from 'express';
import { ApiCreatedResponse, ApiBody } from '@nestjs/swagger';
import { ElixrisDTO } from '../../dto/elixris.dto';
@Controller('elixris')
export class ElixrisController {
  constructor(private elixrisService: ElixrisService) {}
  @Post('/create')
  @ApiCreatedResponse({ description: 'Create Elixris' })
  @ApiBody({ type: ElixrisDTO })
  @UsePipes(new ValidationPipe())
  async createElixris(@Body() payload: ElixrisDTO) {
    try {
      const data = await this.elixrisService.createElixris(payload);
      return { ...data };
    } catch (err) {
      return err.message;
    }
  }
  @Get()
  async getAllUser(@Req() req: Request, @Res() res: Response) {
    try {
      const data = await this.elixrisService.getElixris();
      return res.json({ ...data });
    } catch (err) {
      return err.message;
    }
  }

  @Put('/update/:id')
  @UsePipes(new ValidationPipe())
  async updateElixris(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: ElixrisDTO,
  ) {
    try {
      const data = await this.elixrisService.updateElixris(id, payload);
      return { ...data, message: 'This post was updated' };
    } catch (err) {
      return err.message;
    }
  }

  @Delete('/delete/:id')
  async deleteElixris(@Param('id', ParseIntPipe) id: number) {
    try {
      await this.elixrisService.deleteElixris(id);
      return { ok: false, msg: 'Elixris have is deleted' };
    } catch (err) {
      return err.message;
    }
  }
  @Post('/search')
  @UsePipes(new ValidationPipe())
  async searchElixris(@Body() payload: ElixrisDTO) {
    try {
      const data = await this.elixrisService.searchElixrisByDifficulty(payload);
      return { ...data };
    } catch (err) {
      return err.message;
    }
  }
}
