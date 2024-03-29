import { Injectable, NestMiddleware } from '@nestjs/common';
import {Encryption} from '../../common/hashing'
const hashing = new Encryption
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const authHeader = req.headers.authorization
    if(!authHeader) {
      return res.status(401).json({ok : false, status: 401, message : "User is not authorized"})
    }
    const token = authHeader.split(" ")[1]
    const user = hashing.verifyToken(token, process.env.ACCESS_TOKEN)
    
    try {
      req.user = user
      next();
    } catch (err) {
       return res.status(403).json({ok: false, status : 403, message: err.message})
    }
    
  }
}
 