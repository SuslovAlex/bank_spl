import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/services/auth/auth.service';
import { User, IAuthorization } from '../module/user';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
    public users: User[] = [];
    public isSubmitDisabled: boolean = false;
    public authorizationForm: FormGroup = new FormGroup({
        userEmail: new FormControl('', [Validators.required, Validators.email]),
        userPassword: new FormControl('', Validators.required),
    });

    constructor(
        public route: ActivatedRoute,
        private _authServ: AuthService,
        private _router: Router,
    ) {

    }

    public onSubmit(): void {
    }

    public signIn(): void {
        this.switchSubmit();
        const password: string = this.authorizationForm.controls['userPassword'].value;
        const email: string = this.authorizationForm.controls['userEmail'].value;
        this._authServ.login(email, password).then(() => {
            this.switchSubmit();
            console.log('success');

            this._router.navigate(['/cat-profile']);

        }).catch((error: Error) => {
            console.error(error);
        });
    }

    private switchSubmit(): void {
        this.isSubmitDisabled = !this.isSubmitDisabled;
    }
}
