import { Category } from '../../models/category.model';
import { ICategory } from '../../interfaces/user.interface';
export declare class CategoryService {
    private readonly category;
    create(payload: ICategory): Promise<{
        ok: boolean;
        status: number;
        message: string;
        body?: undefined;
    } | {
        ok: boolean;
        status: number;
        message: string;
        body: {
            category: Category;
        };
    }>;
    getCategory(): Promise<{
        ok: boolean;
        status: number;
        message: string;
        body: {
            category: Category[];
        };
    }>;
    searchCategory(name: string): Promise<{
        ok: boolean;
        status: number;
        message: string;
        body: {
            category: Category;
        };
    }>;
    categoryById(id: string): Promise<{
        ok: boolean;
        status: number;
        message: string;
        body: {
            category: Category;
        };
    }>;
    update(payload: ICategory, id: string): Promise<{
        ok: boolean;
        status: number;
        message: string;
        body: {};
    }>;
    remove(id: string): Promise<{
        ok: boolean;
        status: number;
        message: string;
        body: {};
    }>;
}
