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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostLike = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_1 = require("sequelize");
const post_model_1 = require("./post.model");
const user_model_1 = require("./user.model");
let PostLike = exports.PostLike = class PostLike extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.IsUUID)(4),
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)({ type: sequelize_1.DataTypes.UUID, defaultValue: sequelize_1.DataTypes.UUIDV4, allowNull: false }),
    __metadata("design:type", String)
], PostLike.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0
    }),
    __metadata("design:type", Number)
], PostLike.prototype, "likes", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_model_1.User),
    __metadata("design:type", String)
], PostLike.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], PostLike.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => post_model_1.Post),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], PostLike.prototype, "postId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => post_model_1.Post),
    __metadata("design:type", post_model_1.Post)
], PostLike.prototype, "post", void 0);
exports.PostLike = PostLike = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'postLike',
        timestamps: true
    })
], PostLike);
//# sourceMappingURL=postlike.model.js.map