import { CommentService } from 'src/service/comment/comment.service';
import { commentDto, updateDto } from 'src/service/comment/dto/comment.dto';
export declare class CommentController {
    private comment;
    constructor(comment: CommentService);
    create(payload: commentDto, req: any, res: any): Promise<any>;
    getComment(res: any): Promise<any>;
    getCommentById(commentId: any, res: any): Promise<any>;
    update(updateComment: updateDto, commentId: any, req: any, res: any): Promise<any>;
    remove(commentId: any, req: any, res: any): Promise<any>;
}
