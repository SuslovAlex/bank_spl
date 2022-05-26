import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth/auth.service';

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

    constructor(public auth: AuthService) { }

    public ngOnInit(): void {
    }
    public logout(): void {
        this.auth.logout();
    }
}
