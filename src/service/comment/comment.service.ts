import { Injectable } from '@nestjs/common';
import { Post } from 'src/models/post.model';
import { Comment } from 'src/models/comment.model';
import { IComment, ICommentUpdate } from './interface/comment.interface';
import { IUser } from 'src/interfaces/user.interface';

@Injectable()
export class CommentService {
  private readonly post = Post;
  private readonly comment = Comment;

  async create(payload: IComment, data: IUser) {
    const { id } = data.user;
    const checkPost = await this.post.findOne({
      where: { id: payload.postId },
    });
    if (!checkPost) {
      throw {
        ok: false,
        status: 400,
        message: 'Post is unavailable',
      };
    }
    const comments = await this.comment.create({ ...payload, userId: id });
    return {
      ok: true,
      status: 201,
      message: 'Comment was made',
      body: { comments },
    };
  }

  async get() {
    const comments = await this.comment.findAll({ include: [Post] });
    if (comments.length === 0) {
      throw {
        ok: false,
        status: 400,
        message: 'No comment yet',
      };
    }
    return {
      ok: true,
      status: 201,
      message: 'Comment was made',
      body: { comments },
    };
  }

  async getById(commentId: string) {
    const comments = await this.comment.findOne({
      where: { id: commentId },
      include: [Post],
    });
    return {
      ok: true,
      status: 200,
      message: 'Record was retrived',
      body: { comments },
    };
  }

  async update(payload: ICommentUpdate, commentId: string, data: IUser) {
    const { id } = data.user;
    const user = await this.comment.findOne({ where: { userId: id } });
    if (!user) {
      throw {
        ok: false,
        status: 400,
        message: "Sorry user can't perform this action",
      };
    }
    await this.comment.update({ ...payload }, { where: { id: commentId } });
    return {
      ok: true,
      status: 201,
      message: 'Comment was updated successfully',
      body: {},
    };
  }

  async deleteComment(commentId: string) {
    await this.comment.destroy({ where: { id: commentId } });
    return {
      ok: true,
      status: 201,
      message: 'Comment was deleted successfully',
      body: {},
    };
  }
}
