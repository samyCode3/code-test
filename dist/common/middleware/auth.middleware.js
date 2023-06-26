"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const common_1 = require("@nestjs/common");
const hashing_1 = require("../../common/hashing");
const hashing = new hashing_1.Encryption;
let AuthMiddleware = exports.AuthMiddleware = class AuthMiddleware {
    use(req, res, next) {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ ok: false, status: 401, message: "User is not authorized" });
        }
        const token = authHeader.split(" ")[1];
        const user = hashing.verifyToken(token, process.env.ACCESS_TOKEN);
        if (!user) {
            return res.status(401).json({ ok: false, status: 401, message: "User is not authorized" });
        }
        req.user = user;
        next();
    }
};
exports.AuthMiddleware = AuthMiddleware = __decorate([
    (0, common_1.Injectable)()
], AuthMiddleware);
//# sourceMappingURL=auth.middleware.js.map