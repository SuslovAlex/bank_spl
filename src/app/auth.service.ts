import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, sendEmailVerification, 
         sendPasswordResetEmail, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User } from 'firebase/auth';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public user!: User | null;

    constructor(
      public router: Router,
      private _auth: Auth,
      private _firestore: Firestore,
    ) { 
        this._auth.onAuthStateChanged((user: User | null): void => {
            this.user = user;
        });
    }

    public async login(email: string, password: string): Promise<void> {
        await signInWithEmailAndPassword(this._auth, email, password);
    }

    public async register(email: string, password: string): Promise<void> {
        await createUserWithEmailAndPassword(this._auth, email, password);
    }

    public async sendEmailVerification(): Promise<void> {
        return await sendEmailVerification(this._auth.currentUser!);
    }

    public async sendPasswordResetEmail(passwordResetEmail: string): Promise<void> {
        
        const result: void = await sendPasswordResetEmail(this._auth, passwordResetEmail);
        return result;
    }

    public async logout(): Promise<void> {
        await this._auth.signOut();
    }

    public get isLoggedIn(): boolean { 
        return this._auth.currentUser !== null;
    }
}