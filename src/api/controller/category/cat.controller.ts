import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Put,
  Response,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { categoryDto, GetById } from './dto/category.dto';
import { CategoryService } from '../../../service/category/category.service';
import { ApiBearerAuth, ApiCreatedResponse, ApiBody  } from '@nestjs/swagger';
import { AuthMiddleware } from 'src/common/middleware/auth.middleware';


@Controller('category')
@ApiBearerAuth()
@UseGuards(AuthMiddleware)
export class CatController {
  constructor(private category: CategoryService) {}
  @Post('/create')
  @ApiCreatedResponse({ description : 'Create Category'})
  @ApiBody({type: categoryDto})
  
  async create(@Body() categoryDtos: categoryDto, @Response() res) {
    try {
      const category = await this.category.create(categoryDtos);
      return res.status(category.status).json({ ...category });
    } catch (err) {
      return res.status(err.status).json({ ...err });
    }
  }
 

  @Get('/getCategory')
  @ApiCreatedResponse({ description : 'Get Category'})
  async getCategorys(@Response() res) {
    try {
      const category = await this.category.getCategory();
      return res.status(category.status).json({ ...category });
    } catch (err) {
      return res.status(err.status).json({ ...err });
    }
  }

  @Post('/search')
  async searchCategoryName(@Query('name') name, @Response() res) {
    try {
      const category = await this.category.searchCategory(name);
      return res.status(category.status).json({ ...category });
    } catch (err) {
      return res.status(err.status).json({ ...err });
    }
  }

  @Get(':id')
  @ApiCreatedResponse({ description : 'Create Category'})
  @ApiBody({type: GetById})
  @ApiBearerAuth()
  async getCategoryById(@Param('id') id: string, @Response() res) {
    try {
      const category = await this.category.categoryById(id);
      return res.status(category.status).json({ ...category });
    } catch (err) {
      return res.status(err.status).json({ ...err });
    }
  }

  @Put('/update/:id')
  async updateCategory(
    @Param('id') id: string,
    @Body() categoryDto: categoryDto,
    @Response() res,
  ) {
    try {
      const category = await this.category.update({ ...categoryDto }, id);
      return res.status(category.status).json({ ...category });
    } catch (err) {
      return res.status(err.status).json({ ...err });
    }
  }

  @Delete('/:id')
  async remove(@Param('id') id: string, @Response() res) {
    try {
      const category = await this.category.remove(id);
      return res.status(category.status).json({ ...category });
    } catch (err) {
      return res.status(err.status).json({ ...err });
    }
  }
}
