import { Component, OnInit } from '@angular/core';
import { FirebaseUserService } from 'src/services/firebase-user/firebase-user.service';

@Component({
    selector: 'app-cat-profile',
    templateUrl: './cat-profile.component.html',
    styleUrls: ['./cat-profile.component.scss']
})
export class CatProfileComponent implements OnInit {

    constructor(
        public fu: FirebaseUserService,
    ) { }

    public ngOnInit(): void {
    }

}
