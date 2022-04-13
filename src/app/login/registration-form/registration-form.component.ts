import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-registration-form',
    templateUrl: './registration-form.component.html',
    styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

    constructor() { }

    public ngOnInit(): void {
        let fix: number = 0;
        fix = 2;
    }

}
