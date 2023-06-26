import { Model } from 'sequelize-typescript';
import { User } from './user.model';
import { Comment } from './comment.model';
export declare class CommentLike extends Model<CommentLike> {
    id: string;
    likes: number;
    userId: string;
    user: User;
    commentId: string;
    comment: Comment;
}
