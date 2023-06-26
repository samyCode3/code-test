import { Injectable } from '@nestjs/common';
import { IUser } from '../../interfaces/user.interface';
import { IPost } from './interface/post.interface';
import { Category } from '../../models/category.model';
import { Comment } from '../../models/comment.model';
import { Post } from '../../models/post.model';
@Injectable()
export class PostService {
  private readonly category = Category;
  private readonly post = Post;
  async create(payload: IPost, categoryId: string, data: IUser) {
    const { id } = data.user;
    const cat_id = await this.category.findOne({ where: { id: categoryId } });
    if (!cat_id) {
      throw {
        ok: false,
        status: 400,
        message: 'Invalid parant string provided',
      };
    }
    const blog = await this.post.create({
      ...payload,
      categoryId: cat_id.id,
      userId: id,
    });
    return {
      ok: true,
      status: 201,
      message: 'Your post have been posted',
      body: { blog },
    };
  }

  async getPost() {
    const blog = await this.post.findAll({
      include: [Category, Comment],
    });
    if (blog.length === 0) {
      throw {
        ok: false,
        status: 404,
        message: 'No post yet',
      };
    }
    return {
      ok: true,
      status: 200,
      message: 'Record was Retrived',
      body: { blog },
    };
  }

  async getPostById(postId: string) {
    const blog = await this.post.findOne({
      where: { id: postId },
      include: [Category, Comment],
    });
    return {
      ok: true,
      status: 200,
      message: 'Record was Retrived',
      body: { blog },
    };
  }

  async update(payload: IPost, postId: string, data: IUser) {
    const { id } = data.user;
    const owner = await this.post.findOne({ where: { userId: id } });
    if (!owner) {
      throw {
        ok: false,
        status: 401,
        message: 'You are not authorize to make this request',
      };
    }
    await this.post.update({ ...payload }, { where: { userId: id,  id: postId } });
    return {
      ok: true,
      status: 200,
      message: 'Record was updated',
      body: {},
    };
  }

  async deletePost(postId: string, data: IUser) {
    const {id} = data.user
    await this.post.destroy({ where: { userId: id, id: postId } });
    return {
      ok: true,
      status: 200,
      message: 'Post was deleted successfully',
      body: {},
    };
  }
}
