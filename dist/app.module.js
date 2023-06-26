"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("./database/database.module");
const auth_controller_1 = require("./api/controller/auth.controller");
const auth_service_1 = require("./service/auth.service");
const auth_middleware_1 = require("./common/middleware/auth.middleware");
const cat_controller_1 = require("./api/controller/category/cat.controller");
const category_service_1 = require("./service/category/category.service");
const post_service_1 = require("./service/post/post.service");
const post_controller_1 = require("./api/controller/post/post.controller");
const comment_controller_1 = require("./api/controller/comment/comment.controller");
const comment_service_1 = require("./service/comment/comment.service");
const likes_controller_1 = require("./api/controller/likes/likes.controller");
const likes_service_1 = require("./service/likes/likes.service");
let AppModule = exports.AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(auth_middleware_1.AuthMiddleware)
            .forRoutes(cat_controller_1.CatController, post_controller_1.PostController, comment_controller_1.CommentController, likes_controller_1.PostLikeController);
    }
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [
            auth_controller_1.AuthController,
            cat_controller_1.CatController,
            post_controller_1.PostController,
            comment_controller_1.CommentController,
            likes_controller_1.PostLikeController,
        ],
        providers: [auth_service_1.AuthService, category_service_1.CategoryService, post_service_1.PostService, comment_service_1.CommentService, likes_service_1.LikesService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map