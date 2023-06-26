"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikesService = void 0;
const common_1 = require("@nestjs/common");
const commentlike_model_1 = require("../../models/commentlike.model");
let LikesService = exports.LikesService = class LikesService {
    constructor() {
        this.commentLike = commentlike_model_1.CommentLike;
    }
    async likeComment(data, commentId) {
        const { id } = data.user;
        const isLiked = await this.commentLike.findOne({ where: { userId: id, commentId } });
        if (isLiked.likes === 1) {
            await this.commentLike.update({ likes: 0 }, { where: { userId: id, commentId } });
            return {
                ok: false,
                status: 200,
                message: "You just unlike this post",
                body: {}
            };
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
};
exports.LikesService = LikesService = __decorate([
    (0, common_1.Injectable)()
], LikesService);
//# sourceMappingURL=likes.service.js.map