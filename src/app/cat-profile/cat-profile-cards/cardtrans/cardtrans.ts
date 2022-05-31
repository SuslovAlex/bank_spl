export class Transacton{
    public number: string;
    public balance: number;

    constructor(card: ICard){
        this.number = card.number;
        this.balance = card.balance;
    }
}

export interface ICard {
    name: string,
    number: string,
    expirationDate: string,
    cvv: string,
    owner: string,
    isBanned: boolean,
    balance: number,
}