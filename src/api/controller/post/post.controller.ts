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
import { PostService } from '../../../service/post/post.service';
import { postDto, updateDto } from '../../../service/post/dto/post.dto';
@Controller('post')
export class PostController {
  constructor(private post: PostService) {}
  @Post('/:categoryId')
  async create(
    @Body() blog: postDto,
    @Param('categoryId') categoryId,
    @Request() req,
    @Response() res,
  ) {
    try {
      const post = await this.post.create(blog, categoryId, req.user);
      return res.status(post.status).json({ ...post });
    } catch (err) {
      return res.status(err.status).json({ ...err });
    }
  }
  @Get('/blog')
  async getBlog(@Response() res) {
    try {
      const post = await this.post.getPost();
      return res.status(post.status).json({ ...post });
    } catch (err) {
      return res.status(err.status).json({ ...err });
    }
  }

  @Get('/blog/:postId')
  async getBlogById(@Param('postId') postId, @Response() res) {
    try {
      const post = await this.post.getPostById(postId);
      return res.status(post.status).json({ ...post });
    } catch (err) {
      return res.status(err.status).json({ ...err });
    }
  }

  @Patch('/blog/:postId')
  async update(
    @Body() updatePost: updateDto,
    @Param('postId') postId,
    @Request() req,
    @Response() res,
  ) {
    try {
      const { user } = req;
      const post = await this.post.update(updatePost, postId, user);
      return res.status(post.status).json({ ...post });
    } catch (err) {
      return res.status(err.status).json({ ...err });
    }
  }

  @Delete('/:postId')
  async remove(@Param('postId') postId, @Response() res) {
    try {
      const post = await this.post.deletePost(postId);
      return res.status(post.status).json({ ...post });
    } catch (err) {
      return res.status(err.status).json({ ...err });
    }
  }
}
