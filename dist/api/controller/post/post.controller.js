"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const common_1 = require("@nestjs/common");
const post_service_1 = require("../../../service/post/post.service");
const post_dto_1 = require("../../../service/post/dto/post.dto");
let PostController = exports.PostController = class PostController {
    constructor(post) {
        this.post = post;
    }
    async create(blog, categoryId, req, res) {
        try {
            const post = await this.post.create(blog, categoryId, req.user);
            return res.status(post.status).json({ ...post });
        }
        catch (err) {
            return res.status(err.status).json({ ...err });
        }
    }
    async getBlog(res) {
        try {
            const post = await this.post.getPost();
            return res.status(post.status).json({ ...post });
        }
        catch (err) {
            return res.status(err.status).json({ ...err });
        }
    }
    async getBlogById(postId, res) {
        try {
            const post = await this.post.getPostById(postId);
            return res.status(post.status).json({ ...post });
        }
        catch (err) {
            return res.status(err.status).json({ ...err });
        }
    }
    async update(updatePost, postId, req, res) {
        try {
            const { user } = req;
            const post = await this.post.update(updatePost, postId, user);
            return res.status(post.status).json({ ...post });
        }
        catch (err) {
            return res.status(err.status).json({ ...err });
        }
    }
    async remove(postId, req, res) {
        try {
            const { user } = req;
            const post = await this.post.deletePost(postId, user);
            return res.status(post.status).json({ ...post });
        }
        catch (err) {
            return res.status(err.status).json({ ...err });
        }
    }
};
__decorate([
    (0, common_1.Post)('/:categoryId'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('categoryId')),
    __param(2, (0, common_1.Request)()),
    __param(3, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_dto_1.postDto, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/blog'),
    __param(0, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getBlog", null);
__decorate([
    (0, common_1.Get)('/blog/:postId'),
    __param(0, (0, common_1.Param)('postId')),
    __param(1, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getBlogById", null);
__decorate([
    (0, common_1.Patch)('/blog/:postId'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('postId')),
    __param(2, (0, common_1.Request)()),
    __param(3, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_dto_1.updateDto, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:postId'),
    __param(0, (0, common_1.Param)('postId')),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "remove", null);
exports.PostController = PostController = __decorate([
    (0, common_1.Controller)('post'),
    __metadata("design:paramtypes", [post_service_1.PostService])
], PostController);
//# sourceMappingURL=post.controller.js.map