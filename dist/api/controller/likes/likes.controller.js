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
exports.PostLikeController = void 0;
const common_1 = require("@nestjs/common");
const likes_service_1 = require("../../../service/likes/likes.service");
let PostLikeController = exports.PostLikeController = class PostLikeController {
    constructor(like) {
        this.like = like;
    }
    async likeComment(commentId, req, res) {
        try {
            const { user } = req;
            const like = await this.like.likeComment(user, commentId);
            return res.status(like.status).json({ ...like });
        }
        catch (err) {
            return res.status(err.status).json({ ...err });
        }
    }
};
__decorate([
    (0, common_1.Post)('/comment/:commentId'),
    __param(0, (0, common_1.Param)('commentId')),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], PostLikeController.prototype, "likeComment", null);
exports.PostLikeController = PostLikeController = __decorate([
    (0, common_1.Controller)('post-like'),
    __metadata("design:paramtypes", [likes_service_1.LikesService])
], PostLikeController);
//# sourceMappingURL=likes.controller.js.map