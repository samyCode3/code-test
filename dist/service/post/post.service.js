"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const category_model_1 = require("../../models/category.model");
const comment_model_1 = require("../../models/comment.model");
const post_model_1 = require("../../models/post.model");
let PostService = exports.PostService = class PostService {
    constructor() {
        this.category = category_model_1.Category;
        this.post = post_model_1.Post;
    }
    async create(payload, categoryId, data) {
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
            include: [category_model_1.Category, comment_model_1.Comment],
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
    async getPostById(postId) {
        const blog = await this.post.findOne({
            where: { id: postId },
            include: [category_model_1.Category, comment_model_1.Comment],
        });
        return {
            ok: true,
            status: 200,
            message: 'Record was Retrived',
            body: { blog },
        };
    }
    async update(payload, postId, data) {
        const { id } = data.user;
        const owner = await this.post.findOne({ where: { userId: id } });
        if (!owner) {
            throw {
                ok: false,
                status: 401,
                message: 'You are not authorize to make this request',
            };
        }
        await this.post.update({ ...payload }, { where: { userId: id, id: postId } });
        return {
            ok: true,
            status: 200,
            message: 'Record was updated',
            body: {},
        };
    }
    async deletePost(postId, data) {
        const { id } = data.user;
        await this.post.destroy({ where: { userId: id, id: postId } });
        return {
            ok: true,
            status: 200,
            message: 'Post was deleted successfully',
            body: {},
        };
    }
};
exports.PostService = PostService = __decorate([
    (0, common_1.Injectable)()
], PostService);
//# sourceMappingURL=post.service.js.map