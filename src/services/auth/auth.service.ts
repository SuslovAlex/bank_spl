import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User } from 'firebase/auth';
import { FirebaseUserService } from '../firebase-user/firebase-user.service';


@Injectable()
export class AuthService {

    public user!: User | null;

    constructor(
      public router: Router,
      private _authServ: Auth,
      private _firebaseUser: FirebaseUserService,
    ) { 
        this._authServ.onAuthStateChanged((user: User | null): void => {
            this.user = user;
            if (user) {
                this._firebaseUser.initUser(user.uid);
            }
        });
    }

    public async login(email: string, password: string): Promise<void> {
        await signInWithEmailAndPassword(this._authServ, email, password);
    }

    public async register(email: string, password: string): Promise<void> {
        await createUserWithEmailAndPassword(this._authServ, email, password);
        await this._firebaseUser.createUser(this.user!.uid, email);
    }

    public async sendEmailVerification(): Promise<void> {
        return await sendEmailVerification(this._authServ.currentUser!);
    }

    public async sendPasswordResetEmail(passwordResetEmail: string): Promise<void> {
        
        const result: void = await sendPasswordResetEmail(this._authServ, passwordResetEmail);
        
        return result;
    }

    public async logout(): Promise<void> {
        await this._authServ.signOut();
        this.router.navigate(['']);
        this._firebaseUser.logout();
    }

    public get isLoggedIn(): boolean { 
        return this._authServ.currentUser !== null;
    }

    public init(): void {
        //
    }
}