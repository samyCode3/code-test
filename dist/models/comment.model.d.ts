import { Model } from 'sequelize-typescript';
import { Post } from './post.model';
export declare class Comment extends Model<Comment> {
    id: string;
    userId: string;
    comment: string;
    postId: string;
    post: Post;
}
