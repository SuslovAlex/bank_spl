export class UserRegistration{
    public email: string;
    public password: string;
    public repeatPassword: string;

    constructor(data: IRegistration){
        this.email = data.email;
        this.password = data.password;
        this.repeatPassword = data.repeatPassword;
    }
}

export interface IRegistration{
    email: string;
    password: string;
    repeatPassword: string;
}