import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/user.model';
import { Category } from '../models/category.model';
import { Post } from '../models/post.model';
import { Comment } from '../models/comment.model';
import { CommentLike } from '../models/commentlike.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: process.env.HOST,
        username: process.env.USER,
        password: process.env.PASS,
        database: process.env.DATABASE,
        port: 3306,
      });
      sequelize.addModels([
        User,
        Category,
        Post,
        Comment,
        CommentLike,
      ]);
      sequelize.sync({ alter: true }).then(() => {
        console.log('Database connected successfully');
      });
      return sequelize;
    },
  },
];
