import { IUser } from '../../interfaces/user.interface';
import { IPost } from './interface/post.interface';
import { Post } from '../../models/post.model';
export declare class PostService {
    private readonly category;
    private readonly post;
    create(payload: IPost, categoryId: string, data: IUser): Promise<{
        ok: boolean;
        status: number;
        message: string;
        body: {
            blog: Post;
        };
    }>;
    getPost(): Promise<{
        ok: boolean;
        status: number;
        message: string;
        body: {
            blog: Post[];
        };
    }>;
    getPostById(postId: string): Promise<{
        ok: boolean;
        status: number;
        message: string;
        body: {
            blog: Post;
        };
    }>;
    update(payload: IPost, postId: string, data: IUser): Promise<{
        ok: boolean;
        status: number;
        message: string;
        body: {};
    }>;
    deletePost(postId: string, data: IUser): Promise<{
        ok: boolean;
        status: number;
        message: string;
        body: {};
    }>;
}
