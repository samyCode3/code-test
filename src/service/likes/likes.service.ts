/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CommentLike } from '../../models/commentlike.model';
import { IUser } from 'src/interfaces/user.interface';

@Injectable()
export class LikesService {
  private readonly commentLike = CommentLike;

  async likeComment(data: IUser, commentId: string) {
    const { id } = data.user;
    // eslint-disable-next-line prettier/prettier
    const isLiked = await this.commentLike.findOne({where: {userId : id, commentId}})
    if(isLiked.likes === 1)  {
        await this.commentLike.update({likes: 0}, {where: {userId: id, commentId}})
        return {
            ok : false,
            status: 200,
            message : "You just unlike this post",
            body : {}
        }
    }
    const like = await this.commentLike.create({
      likes: 1,
      userId: id,
      commentId: commentId,
    });
    return {
      ok: true,
      status: 200,
      message: 'You just liked this comment',
      body: { like },
    };
  }
}
