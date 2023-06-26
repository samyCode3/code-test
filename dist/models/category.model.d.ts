import { Model } from 'sequelize-typescript';
import { Post } from './post.model';
export declare class Category extends Model<Category> {
    id: string;
    name: string;
    post: Post[];
}
