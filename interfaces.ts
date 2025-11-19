export interface IApiResponse<T>{
    status: string,
    message: string,
    data?: T | void,
    errors?: Record<string, string>
}

export interface IEmailRecovery{
    email: string,
}

export interface bodyRegister{
    email: string,
    password: string
}

export interface IUser{
    email: string
    name: string;
    isVerified: boolean
    googleId: string,
    facebookId: string
}

export interface IPinCheckBody{
    email : string
    pin: string
}

export interface IPasswordConfirmBody{
    password: string
    confirmPassword : string
}