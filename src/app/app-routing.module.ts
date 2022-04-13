import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './login/login.module';
import { MainComponent } from './main/main.component';

const routes: Routes = [
    {
        path:'authorization', loadChildren: () => import('./login/login.module').then((m: typeof import('./login/login.module')): typeof LoginModule => m.LoginModule)
    },

    {
        path:'', component: MainComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
