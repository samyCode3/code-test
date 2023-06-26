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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../../service/auth.service");
const user_dto_1 = require("../../dto/user.dto");
const swagger_1 = require("@nestjs/swagger");
let AuthController = exports.AuthController = class AuthController {
    constructor(userService) {
        this.userService = userService;
    }
    async create(userDto, res) {
        try {
            const user = await this.userService.create(userDto);
            return res.status(user.status).json({ ...user });
        }
        catch (err) {
            return res.status(err.status).json({ ...err });
        }
    }
    async login(loginDto, res) {
        try {
            const user = await this.userService.login(loginDto);
            return res.status(user.status).json({ ...user });
        }
        catch (err) {
            return res.status(err.status).json({ ...err });
        }
    }
};
__decorate([
    (0, common_1.Post)('/create'),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Register  User' }),
    (0, swagger_1.ApiBody)({ type: user_dto_1.CreateDto }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.CreateDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/login'),
    (0, swagger_1.ApiOkResponse)({ description: 'Login was succesfull' }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Incorrect Email or Password' }),
    (0, swagger_1.ApiBody)({ type: user_dto_1.LoginDto }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.LoginDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map