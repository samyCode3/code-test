/* eslint-disable prettier/prettier */
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AuthController } from './api/controller/auth.controller';
import { AuthService } from './service/auth.service';
import { AuthMiddleware } from './common/middleware/auth.middleware';
import { CatController } from './api/controller/category/cat.controller';
import { CategoryService } from './service/category/category.service';
import { PostService } from './service/post/post.service';
import { PostController } from './api/controller/post/post.controller';
import { CommentController } from './api/controller/comment/comment.controller';
import { CommentService } from './service/comment/comment.service';
import { PostLikeController } from './api/controller/likes/likes.controller';
import { LikesService } from './service/likes/likes.service';


@Module({
  imports: [DatabaseModule],
  controllers: [
    AuthController,
    CatController,
    PostController,
    CommentController,
    PostLikeController,
  ],
  providers: [AuthService, CategoryService, PostService, CommentService, LikesService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(CatController, PostController, CommentController, PostLikeController);
  }
}
