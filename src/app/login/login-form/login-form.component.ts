import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { User,IAuthorization } from '../module/user';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
    public users: User[]=[];
    public redirect: string | undefined;
    public isSubmitDisabled: boolean = false;
    public authorizationForm: FormGroup = new FormGroup({
        userEmail: new FormControl('',[Validators.required, Validators.email]),
        userPassword: new FormControl('',Validators.required),
    });

    constructor(
        public route: ActivatedRoute,
        private _authServ: AuthService,
        private _router: Router,
    ) { 
        
    }

    public ngOnInit(): void { 
        let fix: number = 0;
        fix = 3;
    }

    public onSubmit(): void {
    }

    public signIn(): void {
        this.switchSubmit();
        const password: string = this.authorizationForm.controls['userPassword'].value;
        const email: string = this.authorizationForm.controls['userEmail'].value;
        this._authServ.login(email, password).then(() => {
            this.switchSubmit();
            if (this.redirect) {
                this._router.navigate([this.redirect]);
            } else {
                this._router.navigate(['http://localhost:4200']);
            }
        }).catch((error: Error) => {
        });
    }

    private switchSubmit(): void {
        this.isSubmitDisabled = !this.isSubmitDisabled;
    }
}
