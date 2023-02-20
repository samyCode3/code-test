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
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { SpellService } from '../../services/spell/spell.service';
import { createSpell } from '../../dto/spell.dto';
import { Request, Response } from 'express';
import { ApiCreatedResponse, ApiBody } from '@nestjs/swagger';
@Controller('spell')
export class SpellController {
  constructor(private spellService: SpellService) {}
  @Post('/create')
  @ApiCreatedResponse({ description: 'Create Spell' })
  @ApiBody({ type: createSpell })
  @UsePipes(new ValidationPipe())
  async createSpell(@Body() payload: createSpell) {
    try {
      const data = await this.spellService.createSpell(payload);
      return { ...data };
    } catch (err) {
      return err.message;
    }
  }
  @Get()
  async getAllUser(@Req() req: Request, @Res() res: Response) {
    try {
      const data = await this.spellService.getSpell();
      return res.json({ ...data });
    } catch (err) {
      return err.message;
    }
  }

  @Put('/update')
  @UsePipes(new ValidationPipe())
  async updateSpell(@Body() payload: createSpell) {
    try {
      const data = await this.spellService.updateSpell(payload);
      return { ...data, message: 'A spell was updated' };
    } catch (err) {
      return err.message;
    }
  }

  @Delete('/delete/:id')
  async deleteSpell(@Param('id', ParseIntPipe) id: number) {
    try {
      const data = await this.spellService.deleteSpell(id);
      return { ok: false, msg: 'A Spell was deleted' };
    } catch (err) {
      return err.message;
    }
  }
  @Get('/search/:id')
  async searchSpell(@Param('id', ParseIntPipe) id: number) {
    try {
      const data = await this.spellService.searchSpell(id);
      return { ...data };
    } catch (err) {
      return err.message;
    }
  }
}
