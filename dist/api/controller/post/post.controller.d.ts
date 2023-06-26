import { PostService } from '../../../service/post/post.service';
import { postDto, updateDto } from '../../../service/post/dto/post.dto';
export declare class PostController {
    private post;
    constructor(post: PostService);
    create(blog: postDto, categoryId: any, req: any, res: any): Promise<any>;
    getBlog(res: any): Promise<any>;
    getBlogById(postId: any, res: any): Promise<any>;
    update(updatePost: updateDto, postId: any, req: any, res: any): Promise<any>;
    remove(postId: any, req: any, res: any): Promise<any>;
}
