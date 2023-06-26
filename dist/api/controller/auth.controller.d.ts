import { AuthService } from '../../service/auth.service';
import { CreateDto, LoginDto } from '../../dto/user.dto';
export declare class AuthController {
    private userService;
    constructor(userService: AuthService);
    create(userDto: CreateDto, res: any): Promise<any>;
    login(loginDto: LoginDto, res: any): Promise<any>;
}
