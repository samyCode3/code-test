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
exports.Post = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_1 = require("sequelize");
const category_model_1 = require("./category.model");
const comment_model_1 = require("./comment.model");
const user_model_1 = require("./user.model");
let Post = exports.Post = class Post extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.IsUUID)(4),
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)({ type: sequelize_1.DataTypes.UUID, defaultValue: sequelize_1.DataTypes.UUIDV4, allowNull: false }),
    __metadata("design:type", String)
], Post.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Post.prototype, "title", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Post.prototype, "content", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => comment_model_1.Comment, {
        onDelete: 'CASCADE'
    }),
    __metadata("design:type", Array)
], Post.prototype, "comments", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => category_model_1.Category),
    __metadata("design:type", String)
], Post.prototype, "categoryId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => category_model_1.Category),
    __metadata("design:type", category_model_1.Category)
], Post.prototype, "category", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_model_1.User),
    __metadata("design:type", String)
], Post.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_model_1.User, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", user_model_1.User)
], Post.prototype, "user", void 0);
exports.Post = Post = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'post',
        timestamps: true
    })
], Post);
//# sourceMappingURL=post.model.js.map