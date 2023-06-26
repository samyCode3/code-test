import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
export class Encryption {
    public hashing = bcrypt
    public jwt = jwt
    constructor() {
        this.encryptData
        this.comparedPassword
        this.Jwt_Token
        this.verifyToken
    }
   encryptData (data : any) {
       const salt = this.hashing.genSaltSync(10)
       const hash = this.hashing.hashSync(data, salt)
       return hash
    }  
   
    comparedPassword(password: string, hash: string) 
    {
         const comparePass = this.hashing.compare(password, hash)
         return comparePass
    }
    Jwt_Token(user : any) {
    try {
        const access_token =  this.jwt.sign({user}, process.env.ACCESS_TOKEN, {expiresIn : '10h'})
        return access_token
    } catch(err) {
        throw err 
    }  
    }
     verifyToken(data : string, token) {
        return this.jwt.verify(data, token)
    }
}