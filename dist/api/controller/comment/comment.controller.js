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
exports.CommentController = void 0;
const common_1 = require("@nestjs/common");
const comment_service_1 = require("../../../service/comment/comment.service");
const comment_dto_1 = require("../../../service/comment/dto/comment.dto");
let CommentController = exports.CommentController = class CommentController {
    constructor(comment) {
        this.comment = comment;
    }
    async create(payload, req, res) {
        try {
            const { user } = req;
            const comment = await this.comment.create(payload, user);
            return res.status(comment.status).json({ ...comment });
        }
        catch (err) {
            return res.status(err.status).json({ ...err });
        }
    }
    async getComment(res) {
        try {
            const comment = await this.comment.get();
            return res.status(comment.status).json({ ...comment });
        }
        catch (err) {
            return res.status(err.status).json({ ...err });
        }
    }
    async getCommentById(commentId, res) {
        try {
            const comment = await this.comment.getById(commentId);
            return res.status(comment.status).json({ ...comment });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
    async update(updateComment, commentId, req, res) {
        try {
            const { user } = req;
            const comment = await this.comment.update(updateComment, commentId, user);
            return res.status(comment.status).json({ ...comment });
        }
        catch (err) {
            return res.status(err.status).json({ ...err });
        }
    }
    async remove(commentId, res) {
        try {
            const comment = await this.comment.deleteComment(commentId);
            return res.status(comment.status).json({ ...comment });
        }
        catch (err) {
            return res.status(err.status).json({ ...err });
        }
    }
};
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comment_dto_1.commentDto, Object, Object]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "getComment", null);
__decorate([
    (0, common_1.Get)('/:commentId'),
    __param(0, (0, common_1.Param)('commentId')),
    __param(1, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "getCommentById", null);
__decorate([
    (0, common_1.Patch)('/:commentId'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('commentId')),
    __param(2, (0, common_1.Request)()),
    __param(3, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comment_dto_1.updateDto, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:commentId'),
    __param(0, (0, common_1.Param)('commentId')),
    __param(1, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "remove", null);
exports.CommentController = CommentController = __decorate([
    (0, common_1.Controller)('comment'),
    __metadata("design:paramtypes", [comment_service_1.CommentService])
], CommentController);
//# sourceMappingURL=comment.controller.js.map