import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from 'src/app/auth.service';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
    constructor(
        public route: ActivatedRoute,
        private _authServ: AuthService,
        private _router: Router,
        private _authorization: Auth
    ) { 
        
    }

    public ngOnInit(): void { 
        let fix: number = 0;
        fix = 3;
    }
}
