import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatProfileMainComponent } from './cat-profile-main/cat-profile-main.component';
import { CatProfileComponent } from './cat-profile/cat-profile.component';


const routes: Routes = [
    {
        path: '', component: CatProfileComponent, children: [
            {
                path: '', component: CatProfileMainComponent
            },

        ]
    },
    
];

export const profileRouting: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);