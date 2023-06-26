"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_model_1 = require("../models/user.model");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const hashing_1 = require("../common/hashing");
const hashing = new hashing_1.Encryption();
let AuthService = exports.AuthService = class AuthService {
    constructor() {
        this.user = user_model_1.User;
    }
    async create(payload) {
        const { email, password } = payload;
        const findUser = await this.user.findOne({ where: { email } });
        if (findUser) {
            throw {
                ok: false,
                status: 400,
                message: 'Email is already used',
            };
        }
        payload.password = hashing.encryptData(password);
        const user = await this.user.create(payload);
        return {
            ok: true,
            status: 200,
            message: 'User is created',
            body: { user },
        };
    }
    async login(payload) {
        const { password, email } = payload;
        const user = await this.user.findOne({ where: { email } });
        if (!user) {
            throw {
                ok: false,
                status: 400,
                message: 'Incorrect Email or password provided',
            };
        }
        const isValid = await hashing.comparedPassword(password, user.password);
        if (!isValid) {
            throw {
                ok: false,
                status: 400,
                message: 'Incorrect Email or password provided',
            };
        }
        const token = hashing.Jwt_Token(user);
        return {
            ok: true,
            status: 200,
            message: 'login was successfull',
            body: { user, token },
        };
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)()
], AuthService);
//# sourceMappingURL=auth.service.js.map