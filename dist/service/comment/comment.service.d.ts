import { Comment } from 'src/models/comment.model';
import { IComment, ICommentUpdate } from './interface/comment.interface';
import { IUser } from 'src/interfaces/user.interface';
export declare class CommentService {
    private readonly post;
    private readonly comment;
    create(payload: IComment, data: IUser): Promise<{
        ok: boolean;
        status: number;
        message: string;
        body: {
            comments: Comment;
        };
    }>;
    get(): Promise<{
        ok: boolean;
        status: number;
        message: string;
        body: {
            comments: Comment[];
        };
    }>;
    getById(commentId: string): Promise<{
        ok: boolean;
        status: number;
        message: string;
        body: {
            comments: Comment;
        };
    }>;
    update(payload: ICommentUpdate, commentId: string, data: IUser): Promise<{
        ok: boolean;
        status: number;
        message: string;
        body: {};
    }>;
    deleteComment(commentId: string, data: IUser): Promise<{
        ok: boolean;
        status: number;
        message: string;
        body: {};
    }>;
}
