export interface ICreateUser {
    fullname: string;
    email: string;
    password: string;
}
export interface ILogin {
    email: string;
    password: string;
}
export interface ICategory {
    name: string;
}
export interface IUser {
    id: string;
    fullname: string;
    email: string;
    user: any;
}
