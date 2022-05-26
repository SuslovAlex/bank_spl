import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { FirebaseUserService } from 'src/services/firebase-user/firebase-user.service';
import { FirebaseCardService } from 'src/services/firebase-card/firebase-card.service';
import { AuthService } from 'src/services/auth/auth.service';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideDatabase(() => getDatabase()),
        provideFirestore(() => getFirestore()),
    ],
    providers: [
        FirebaseUserService,
        FirebaseCardService,
        AuthService,
    ],
    bootstrap: [AppComponent],
})


export class AppModule {}
