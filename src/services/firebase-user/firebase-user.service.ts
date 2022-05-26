import { Injectable } from '@angular/core';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';

@Injectable()
export class FirebaseUserService {

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
}
