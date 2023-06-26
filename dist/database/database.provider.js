"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const user_model_1 = require("../models/user.model");
const category_model_1 = require("../models/category.model");
const post_model_1 = require("../models/post.model");
const comment_model_1 = require("../models/comment.model");
const commentlike_model_1 = require("../models/commentlike.model");
exports.databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new sequelize_typescript_1.Sequelize({
                dialect: 'mysql',
                host: process.env.HOST,
                username: process.env.USER,
                password: process.env.PASS,
                database: process.env.DATABASE,
                port: 3306,
            });
            sequelize.addModels([
                user_model_1.User,
                category_model_1.Category,
                post_model_1.Post,
                comment_model_1.Comment,
                commentlike_model_1.CommentLike,
            ]);
            sequelize.sync({ alter: true }).then(() => {
                console.log('Database connected successfully');
            });
            return sequelize;
        },
    },
];
//# sourceMappingURL=database.provider.js.map