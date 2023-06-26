"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const post_model_1 = require("../../models/post.model");
const comment_model_1 = require("../../models/comment.model");
let CommentService = exports.CommentService = class CommentService {
    constructor() {
        this.post = post_model_1.Post;
        this.comment = comment_model_1.Comment;
    }
    async create(payload, data) {
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
        const comments = await this.comment.findAll({ include: [post_model_1.Post] });
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
    async getById(commentId) {
        const comments = await this.comment.findOne({
            where: { id: commentId },
            include: [post_model_1.Post],
        });
        return {
            ok: true,
            status: 200,
            message: 'Record was retrived',
            body: { comments },
        };
    }
    async update(payload, commentId, data) {
        const { id } = data.user;
        const user = await this.comment.findOne({ where: { userId: id } });
        if (!user) {
            throw {
                ok: false,
                status: 400,
                message: "Sorry user can't perform this action",
            };
        }
        await this.comment.update({ ...payload }, { where: { userId: id, id: commentId } });
        return {
            ok: true,
            status: 201,
            message: 'Comment was updated successfully',
            body: {},
        };
    }
    async deleteComment(commentId, data) {
        const { id } = data.user;
        await this.comment.destroy({ where: { userId: id, id: commentId } });
        return {
            ok: true,
            status: 201,
            message: 'Comment was deleted successfully',
            body: {},
        };
    }
};
exports.CommentService = CommentService = __decorate([
    (0, common_1.Injectable)()
], CommentService);
//# sourceMappingURL=comment.service.js.map