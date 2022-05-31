import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { doc, DocumentReference, DocumentSnapshot, Firestore } from '@angular/fire/firestore';
import { getDoc, runTransaction, Transaction } from 'firebase/firestore';
import { DocumentData } from 'rxfire/firestore/interfaces';
import { IUser } from '../firebase-user/interfaces/user';
import { ICard } from './interfaces/card';

@Injectable()
export class FirebaseCardService {

    constructor(
        public fs: Firestore,
    ) { }

    public async loadCards(user: IUser): Promise<ICard[]> {
        const cards: ICard[] = [];
        for(const card of user.cards) {
            const cardSnap: DocumentSnapshot<DocumentData> = await getDoc(card);
            cards.push(cardSnap.data() as ICard);
        }

        return cards;
    }

    public async sendMoney(cardFrom: string, cardTo: string, amount: number): Promise<void> {
        const fromRef: DocumentReference<DocumentData> = doc(this.fs, 'cards', cardFrom);
        const toRef: DocumentReference<DocumentData> = doc(this.fs, 'cards', cardTo);
        try {
            if (!Number.isFinite(amount)) {
                throw 'Некорректная сумма';
            }
            await runTransaction(this.fs, async (transaction: Transaction) => {
                const fromSnap: DocumentSnapshot<DocumentData> = await transaction.get(fromRef);
                const toSnap: DocumentSnapshot<DocumentData> = await transaction.get(toRef);
                if (!toSnap.exists()) {
                    throw 'Такой карты не существует';
                }
                const fromCard: ICard = fromSnap.data() as ICard;
                const toCard: ICard = toSnap.data() as ICard;
                const balanceFrom: number = fromCard.balance;
                if (balanceFrom < amount) {
                    throw 'Недостаточно средств';
                }
                const newBalanceFrom: number = parseFloat((fromCard.balance - amount).toFixed(2));
                const newBalanceTo: number = parseFloat((toCard.balance + amount).toFixed(2));
                transaction.update(fromRef, { balance: newBalanceFrom });
                transaction.update(toRef, { balance: newBalanceTo });
            });
        } catch(e) {
            throw new Error(`Ошибка транзакции: ${e}`);
        }
    }
}
