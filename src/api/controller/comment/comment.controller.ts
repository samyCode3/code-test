import {
  Controller,
  Request,
  Get,
  Response,
  Body,
  Param,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';
import { CommentService } from 'src/service/comment/comment.service';
import { commentDto, updateDto } from 'src/service/comment/dto/comment.dto';

@Controller('comment')
export class CommentController {
  constructor(private comment: CommentService) {}

  @Post('/create')
  async create(@Body() payload: commentDto, @Request() req, @Response() res) {
    try {
      const { user } = req;
      const comment = await this.comment.create(payload, user);
      return res.status(comment.status).json({ ...comment });
    } catch (err) {
      return res.status(err.status).json({ ...err });
    }
  }

  @Get('/')
  async getComment(@Response() res) {
    try {
      const comment = await this.comment.get();
      return res.status(comment.status).json({ ...comment });
    } catch (err) {
      return res.status(err.status).json({ ...err });
    }
  }

  @Get('/:commentId')
  async getCommentById(@Param('commentId') commentId, @Response() res) {
    try {
      const comment = await this.comment.getById(commentId);
      return res.status(comment.status).json({ ...comment });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
  @Patch('/:commentId')
  async update(
    @Body() updateComment: updateDto,
    @Param('commentId') commentId,
    @Request() req,
    @Response() res,
  ) {
    try {
      const { user } = req;
      const comment = await this.comment.update(updateComment, commentId, user);
      return res.status(comment.status).json({ ...comment });
    } catch (err) {
      return res.status(err.status).json({ ...err });
    }
  }

  @Delete('/:commentId')
  async remove(@Param('commentId') commentId, @Response() res) {
    try {
      const comment = await this.comment.deleteComment(commentId);
      return res.status(comment.status).json({ ...comment });
    } catch (err) {
      return res.status(err.status).json({ ...err });
    }
  }
}
