import { User } from '../models/user.model';
import { ICreateUser, ILogin } from '../interfaces/user.interface';
export declare class AuthService {
    private readonly user;
    create(payload: ICreateUser): Promise<{
        ok: boolean;
        status: number;
        message: string;
        body: {
            user: User;
        };
    }>;
    login(payload: ILogin): Promise<{
        ok: boolean;
        status: number;
        message: string;
        body: {
            user: User;
            token: any;
        };
    }>;
}
