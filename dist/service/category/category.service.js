"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const category_model_1 = require("../../models/category.model");
const post_model_1 = require("../../models/post.model");
let CategoryService = exports.CategoryService = class CategoryService {
    constructor() {
        this.category = category_model_1.Category;
    }
    async create(payload) {
        const { name } = payload;
        const duplicate = await this.category.findOne({ where: { name } });
        if (duplicate) {
            await this.category.update({ name }, { where: { id: duplicate.id } });
            return {
                ok: true,
                status: 200,
                message: 'Seem category already existed',
            };
        }
        const category = await this.category.create({ ...payload });
        return {
            ok: true,
            status: 201,
            message: 'Record was added',
            body: { category },
        };
    }
    async getCategory() {
        const category = await this.category.findAll({ include: [post_model_1.Post] });
        if (category.length === 0) {
            throw {
                ok: false,
                status: 404,
                message: 'No categories active yet',
            };
        }
        return {
            ok: true,
            status: 200,
            message: 'Result was retrived',
            body: { category },
        };
    }
    async searchCategory(name) {
        const category = await this.category.findOne({
            where: { name },
            include: [post_model_1.Post],
        });
        if (!category) {
            throw {
                ok: false,
                status: 404,
                message: 'No result found for this search',
            };
        }
        return {
            ok: true,
            status: 200,
            message: 'Result for search',
            body: { category },
        };
    }
    async categoryById(id) {
        const category = await this.category.findOne({
            where: { id },
            include: [post_model_1.Post],
        });
        if (!category) {
            throw {
                ok: false,
                status: 404,
                message: 'No result found for this search',
            };
        }
        return {
            ok: true,
            status: 200,
            message: 'Result for search',
            body: { category },
        };
    }
    async update(payload, id) {
        const category = await this.category.findOne({ where: { id } });
        if (!category) {
            throw {
                ok: false,
                status: 404,
                message: "Can't process this request",
            };
        }
        await this.category.update({ ...payload }, { where: { id } });
        return {
            ok: true,
            status: 200,
            message: 'Result has been updated successfully',
            body: {},
        };
    }
    async remove(id) {
        await this.category.destroy({ where: { id } });
        return {
            ok: true,
            status: 200,
            message: 'Result has been deleted successfully',
            body: {},
        };
    }
};
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)()
], CategoryService);
//# sourceMappingURL=category.service.js.map