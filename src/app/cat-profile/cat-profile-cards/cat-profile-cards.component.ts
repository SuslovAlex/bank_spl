import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FirebaseCardService } from 'src/services/firebase-card/firebase-card.service';
import { ICard } from 'src/services/firebase-card/interfaces/card';
import { FirebaseUserService } from 'src/services/firebase-user/firebase-user.service';


@Component({
    selector: 'app-cat-profile-cards',
    templateUrl: './cat-profile-cards.component.html',
    styleUrls: ['./cat-profile-cards.component.scss']
})
export class CatProfileCardsComponent implements OnInit {
    public isMoneySended: boolean = false;
    public cards: ICard[] = [];
    public transForm: FormGroup = new FormGroup({
        cardNumberFrom: new FormControl(''),
        cardNumberTo: new FormControl(''),
        cardBalance: new FormControl(''),
    });


    constructor(
        public fu: FirebaseUserService,
        public fc: FirebaseCardService,
    ) { }

    public ngOnInit(): void {
        this.fc.loadCards(this.fu.user!).then((cards: ICard[]) => {
            this.cards = cards;
            console.log(cards);
        });
    }
    
    public sendMoney(): void {
        this.sendMoney();
        const cardFrom: string = this.transForm.controls['cardNumberFrom'].value;
        const cardTo: string = this.transForm.controls['cardNumberTo'].value;
        const amount: number = this.transForm.controls['cardBalance'].value;
        this.fc.sendMoney(cardFrom,cardTo,amount).then(() => {
            this.sendMoney();
            console.log('success');
        }).catch((error: Error) => {
            console.error(error);
        });
    }

}
