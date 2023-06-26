"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatController = void 0;
const common_1 = require("@nestjs/common");
const category_dto_1 = require("./dto/category.dto");
const category_service_1 = require("../../../service/category/category.service");
const swagger_1 = require("@nestjs/swagger");
const auth_middleware_1 = require("../../../common/middleware/auth.middleware");
let CatController = exports.CatController = class CatController {
    constructor(category) {
        this.category = category;
    }
    async create(categoryDtos, res) {
        try {
            const category = await this.category.create(categoryDtos);
            return res.status(category.status).json({ ...category });
        }
        catch (err) {
            return res.status(err.status).json({ ...err });
        }
    }
    async getCategorys(res) {
        try {
            const category = await this.category.getCategory();
            return res.status(category.status).json({ ...category });
        }
        catch (err) {
            return res.status(err.status).json({ ...err });
        }
    }
    async searchCategoryName(name, res) {
        try {
            const category = await this.category.searchCategory(name);
            return res.status(category.status).json({ ...category });
        }
        catch (err) {
            return res.status(err.status).json({ ...err });
        }
    }
    async getCategoryById(id, res) {
        try {
            const category = await this.category.categoryById(id);
            return res.status(category.status).json({ ...category });
        }
        catch (err) {
            return res.status(err.status).json({ ...err });
        }
    }
    async updateCategory(id, categoryDto, res) {
        try {
            const category = await this.category.update({ ...categoryDto }, id);
            return res.status(category.status).json({ ...category });
        }
        catch (err) {
            return res.status(err.status).json({ ...err });
        }
    }
    async remove(id, res) {
        try {
            const category = await this.category.remove(id);
            return res.status(category.status).json({ ...category });
        }
        catch (err) {
            return res.status(err.status).json({ ...err });
        }
    }
};
__decorate([
    (0, common_1.Post)('/create'),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Create Category' }),
    (0, swagger_1.ApiBody)({ type: category_dto_1.categoryDto }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_dto_1.categoryDto, Object]),
    __metadata("design:returntype", Promise)
], CatController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/getCategory'),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Get Category' }),
    __param(0, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CatController.prototype, "getCategorys", null);
__decorate([
    (0, common_1.Post)('/search'),
    __param(0, (0, common_1.Query)('name')),
    __param(1, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CatController.prototype, "searchCategoryName", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Create Category' }),
    (0, swagger_1.ApiBody)({ type: category_dto_1.GetById }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CatController.prototype, "getCategoryById", null);
__decorate([
    (0, common_1.Put)('/update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, category_dto_1.categoryDto, Object]),
    __metadata("design:returntype", Promise)
], CatController.prototype, "updateCategory", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CatController.prototype, "remove", null);
exports.CatController = CatController = __decorate([
    (0, common_1.Controller)('category'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_middleware_1.AuthMiddleware),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CatController);
//# sourceMappingURL=cat.controller.js.map