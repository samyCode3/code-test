import { Model } from 'sequelize-typescript';
import { Post } from './post.model';
export declare class User extends Model<User> {
    id: string;
    fullname: string;
    email: string;
    password: string;
    post: Post[];
}
