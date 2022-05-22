import { Component, OnInit } from '@angular/core';
import { UserRegistration } from '../module/userRegistration';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Auth } from '@angular/fire/auth';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
    selector: 'app-registration-form',
    templateUrl: './registration-form.component.html',
    styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
    public users: UserRegistration[]=[];
    public isSubmitDisabled: boolean = false;
    public registrationForm: FormGroup = new FormGroup({
        userEmail: new FormControl('',[Validators.required, Validators.email]),
        userPassword: new FormControl('',Validators.required),
        userRepeatPassword: new FormControl('',Validators.required),
    });

    constructor(
        public route: ActivatedRoute,
        private _authServ: AuthService,
        private _router: Router,) {
    }

    public ngOnInit(): void {
        let fix: number = 0;
        fix = 2;
    }

    public onSubmit(): void {
        
    }

    public signUpMethod(): void {
        this.switchSubmit();
        const password: string = this.registrationForm.controls['userPassword'].value;
        const email: string = this.registrationForm.controls['userEmail'].value;
        this._authServ.register(email, password).then(() => {
            this.switchSubmit();
            this._authServ.sendEmailVerification();
            this._router.navigate(['/']);
        }).catch((error: Error): void => {
        });
    }

    private switchSubmit(): void {
        this.isSubmitDisabled = !this.isSubmitDisabled;
    }

}
