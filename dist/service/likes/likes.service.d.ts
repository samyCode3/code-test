import { CommentLike } from '../../models/commentlike.model';
import { IUser } from 'src/interfaces/user.interface';
export declare class LikesService {
    private readonly commentLike;
    likeComment(data: IUser, commentId: string): Promise<{
        ok: boolean;
        status: number;
        message: string;
        body: {
            like?: undefined;
        };
    } | {
        ok: boolean;
        status: number;
        message: string;
        body: {
            like: CommentLike;
        };
    }>;
}
