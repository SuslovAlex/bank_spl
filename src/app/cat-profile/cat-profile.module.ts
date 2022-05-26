import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { profileRouting } from './cat-profile-routing.module';
import { CatProfileMainComponent } from './cat-profile-main/cat-profile-main.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CatProfileComponent } from './cat-profile/cat-profile.component';



@NgModule({
    declarations: [
        CatProfileMainComponent,
        SideBarComponent,
        CatProfileComponent,
    ],
    imports: [
        CommonModule,
        profileRouting,
    ]
})
export class CatProfileModule { }
