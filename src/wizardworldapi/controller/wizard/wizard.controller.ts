import {
  Controller,
  Req,
  Res,
  Post,
  Get,
  Put,
  Body,
  Param,
  ValidationPipe,
  ParseIntPipe,
  UsePipes,
  Delete,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateWizard } from '../../dto/wizard.dto';
import { ApiCreatedResponse, ApiBody } from '@nestjs/swagger';
import { WizardService } from '../../services/wizard/wizard.service';
@Controller('wizard')
export class WizardController {
  constructor(private wizardService: WizardService) {}
  @Get()
  async getWizard(@Req() req: Request, @Res() res: Response) {
    const data = await this.wizardService.fetchData();
    return res.json({ ...data });
  }
  @Post('/create')
  @ApiCreatedResponse({ description: 'Create Wizard' })
  @ApiBody({ type: CreateWizard })
  @UsePipes(new ValidationPipe())
  @UsePipes(new ValidationPipe())
  async createUser(@Body() payload: CreateWizard) {
    try {
      await this.wizardService.createWizard(payload);
      return payload;
    } catch (err) {
      return err.message;
    }
  }
  @Put('/update/:id')
  @UsePipes(new ValidationPipe())
  async updateWizard(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: CreateWizard,
  ) {
    try {
      const data = await this.wizardService.updateWizard(id, payload);
      return { data, message: 'A spell was updated' };
    } catch (err) {
      return err.message;
    }
  }
  @Delete('/delete/:id')
  async deleteWizard(@Param('id', ParseIntPipe) id: number) {
    try {
      await this.wizardService.deleteWizards(id);
      return { ok: true, message: 'A Wizard was deleted' };
    } catch (err) {
      return err.message;
    }
  }
  @Post('/search')
  @UsePipes(new ValidationPipe())
  async getUserByNames(@Body() payload: CreateWizard) {
    try {
      const data = await this.wizardService.getWizardByNames(payload);
      return { data };
    } catch (err) {
      return err.message;
    }
  }
}
