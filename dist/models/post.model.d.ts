import { Model } from 'sequelize-typescript';
import { Category } from './category.model';
import { Comment } from './comment.model';
import { User } from './user.model';
export declare class Post extends Model<Post> {
    id: string;
    title: string;
    content: string;
    comments: Comment[];
    categoryId: string;
    category: Category;
    userId: string;
    user: User;
}
