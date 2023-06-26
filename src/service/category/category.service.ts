import { Injectable } from '@nestjs/common';
import { Category } from '../../models/category.model';
import { ICategory } from '../../interfaces/user.interface';
import { Post } from 'src/models/post.model';

@Injectable()
export class CategoryService {
  private readonly category = Category;
  async create(payload: ICategory) {
    const { name } = payload;
    const duplicate = await this.category.findOne({ where: { name } });
    if (duplicate) {
      await this.category.update({ name }, { where: { id: duplicate.id } });
      return {
        ok: true,
        status: 200,
        message: 'Seem category already existed',
      };
    }
    const category = await this.category.create({ ...payload });
    return {
      ok: true,
      status: 201,
      message: 'Record was added',
      body: { category },
    };
  }
  async getCategory() {
    const category = await this.category.findAll({ include: [Post] });
    if (category.length === 0) {
      throw {
        ok: false,
        status: 404,
        message: 'No categories active yet',
      };
    }
    return {
      ok: true,
      status: 200,
      message: 'Result was retrived',
      body: { category },
    };
  }

  async searchCategory(name: string) {
    const category = await this.category.findOne({
      where: { name },
      include: [Post],
    });
    if (!category) {
      throw {
        ok: false,
        status: 404,
        message: 'No result found for this search',
      };
    }
    return {
      ok: true,
      status: 200,
      message: 'Result for search',
      body: { category },
    };
  }

  async categoryById(id: string) {
    const category = await this.category.findOne({
      where: { id },
      include: [Post],
    });
    if (!category) {
      throw {
        ok: false,
        status: 404,
        message: 'No result found for this search',
      };
    }
    return {
      ok: true,
      status: 200,
      message: 'Result for search',
      body: { category },
    };
  }

  async update(payload: ICategory, id: string) {
    const category = await this.category.findOne({ where: { id } });
    if (!category) {
      throw {
        ok: false,
        status: 404,
        message: "Can't process this request",
      };
    }
    await this.category.update({ ...payload }, { where: { id } });
    return {
      ok: true,
      status: 200,
      message: 'Result has been updated successfully',
      body: {},
    };
  }

  async remove(id: string) {
    await this.category.destroy({ where: { id } });
    return {
      ok: true,
      status: 200,
      message: 'Result has been deleted successfully',
      body: {},
    };
  }
}
