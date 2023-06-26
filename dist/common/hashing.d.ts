export declare class Encryption {
    hashing: any;
    jwt: any;
    constructor();
    encryptData(data: any): any;
    comparedPassword(password: string, hash: string): any;
    Jwt_Token(user: any): any;
    verifyToken(data: string, token: any): any;
}
