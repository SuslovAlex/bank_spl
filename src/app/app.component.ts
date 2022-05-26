import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
    public title: string = 'bank_spl';

    constructor(
        private _auth: AuthService,
    ) {}
    public ngOnInit(): void {
        this._auth.init();
    }
}
