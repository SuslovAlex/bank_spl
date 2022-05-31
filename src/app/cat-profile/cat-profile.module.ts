import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { profileRouting } from './cat-profile-routing.module';
import { CatProfileMainComponent } from './cat-profile-main/cat-profile-main.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CatProfileComponent } from './cat-profile/cat-profile.component';
import { CatProfileCardsComponent } from './cat-profile-cards/cat-profile-cards.component';
import { Router, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        CatProfileMainComponent,
        SideBarComponent,
        CatProfileComponent,
        CatProfileCardsComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        profileRouting,
    ]
})
export class CatProfileModule { }
