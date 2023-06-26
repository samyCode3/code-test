import { Model } from 'sequelize-typescript';
import { Post } from './post.model';
import { User } from './user.model';
export declare class PostLike extends Model<PostLike> {
    id: string;
    likes: number;
    userId: string;
    user: User;
    postId: string;
    post: Post;
}
