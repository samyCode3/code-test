import { LikesService } from 'src/service/likes/likes.service';
export declare class PostLikeController {
    private like;
    constructor(like: LikesService);
    likeComment(commentId: any, req: any, res: any): Promise<any>;
}
