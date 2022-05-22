import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { loginRouting } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
    declarations: [
        LoginFormComponent,
        RegistrationFormComponent
    ],
    imports: [
        CommonModule,
        loginRouting,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [LoginFormComponent],
})
export class LoginModule {
}
