import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';


const routes: Routes = [
    {
        path: '', redirectTo: 'login'
    },
    { 
        path: 'login', pathMatch: 'full', component: LoginFormComponent 
    },
    { 
        path: 'registration', pathMatch: 'full', component: RegistrationFormComponent 
    },
];

export const loginRouting: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);