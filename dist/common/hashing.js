"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Encryption = void 0;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
class Encryption {
    constructor() {
        this.hashing = bcrypt;
        this.jwt = jwt;
        this.encryptData;
        this.comparedPassword;
        this.Jwt_Token;
        this.verifyToken;
    }
    encryptData(data) {
        const salt = this.hashing.genSaltSync(10);
        const hash = this.hashing.hashSync(data, salt);
        return hash;
    }
    comparedPassword(password, hash) {
        const comparePass = this.hashing.compare(password, hash);
        return comparePass;
    }
    Jwt_Token(user) {
        try {
            const access_token = this.jwt.sign({ user }, process.env.ACCESS_TOKEN, { expiresIn: '10h' });
            return access_token;
        }
        catch (err) {
            throw err;
        }
    }
    verifyToken(data, token) {
        return this.jwt.verify(data, token);
    }
}
exports.Encryption = Encryption;
//# sourceMappingURL=hashing.js.map