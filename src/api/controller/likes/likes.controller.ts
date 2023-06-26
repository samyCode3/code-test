import { Controller, Param, Post, Response, Request } from '@nestjs/common';
import { LikesService } from 'src/service/likes/likes.service';

@Controller('post-like')
export class PostLikeController {
  constructor(private like: LikesService) {}
  @Post('/comment/:commentId')
  async likeComment(
    @Param('commentId') commentId,
    @Request() req,
    @Response() res,
  ) {
    try {
      const { user } = req;
      const like = await this.like.likeComment(user, commentId);
      return res.status(like.status).json({ ...like });
    } catch (err) {
      return res.status(err.status).json({ ...err });
    }
  }
}
