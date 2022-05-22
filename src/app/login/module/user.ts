export class User{
    public email: string;
    public password: string;

    constructor(data: IAuthorization){
        this.email = data.email;
        this.password = data.password;
    }
}

export interface IAuthorization{
    name: string;
    email: string;
    password: string;
}