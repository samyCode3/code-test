import { categoryDto } from './dto/category.dto';
import { CategoryService } from '../../../service/category/category.service';
export declare class CatController {
    private category;
    constructor(category: CategoryService);
    create(categoryDtos: categoryDto, res: any): Promise<any>;
    getCategorys(res: any): Promise<any>;
    searchCategoryName(name: any, res: any): Promise<any>;
    getCategoryById(id: string, res: any): Promise<any>;
    updateCategory(id: string, categoryDto: categoryDto, res: any): Promise<any>;
    remove(id: string, res: any): Promise<any>;
}
