import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatProfileModule } from './cat-profile/cat-profile.module';
import { LoginModule } from './login/login.module';
import { MainComponent } from './main/main.component';
import { AuthGuard, AuthPipe, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToAuthorization = (): AuthPipe => redirectUnauthorizedTo('authorization');
const redirectLoggedInToCatProfile = (): AuthPipe => redirectLoggedInTo('cat-profile');

const routes: Routes = [
    {
        path:'authorization', loadChildren: () => import('./login/login.module').then((m: typeof import('./login/login.module')): typeof LoginModule => m.LoginModule), canActivate: [AuthGuard], data: { authGuardPipe: redirectLoggedInToCatProfile }
    },

    {
        path:'', component: MainComponent
    },
    {
        path: 'cat-profile', loadChildren: () => import('./cat-profile/cat-profile.module').then((m: typeof import('./cat-profile/cat-profile.module')): typeof CatProfileModule => m.CatProfileModule), canActivate: [AuthGuard], data: { authGuardPipe: redirectUnauthorizedToAuthorization }
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
