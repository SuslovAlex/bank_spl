import { Injectable } from '@angular/core';
import { doc, DocumentData, DocumentReference, Firestore, setDoc } from '@angular/fire/firestore';
import { DocumentSnapshot, getDoc } from 'firebase/firestore';
import { IUser } from './interfaces/user';

@Injectable()
export class FirebaseUserService {

    public user: IUser | undefined;
    public isLoaded: boolean = false;

    constructor(
        public firestore: Firestore
    ) { }

    public async createUser(id: string, email: string): Promise<void> {
        await setDoc(doc(this.firestore, 'users', id), {
            id: id,
            email: email,
            cards: [],
        });
    }

    public initUser(id: string): void {
        this.getUser(id);
    }

    public async getUser(id: string): Promise<void> {
        const userRef: DocumentReference<DocumentData> = doc(this.firestore, 'users', id);
        const userSnap: DocumentSnapshot<DocumentData> = await getDoc(userRef);
        if (userSnap.exists()) {
            this.user = userSnap.data() as IUser;
            this.isLoaded = true;
        } else {
            throw new Error('Ошибка загрузки пользователя');
        }
    }

    public logout(): void {
        this.user = undefined;
        this.isLoaded = false;
    }
}
