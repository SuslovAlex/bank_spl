import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
            ],
            declarations: [
                AppComponent,
            ],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture:any = TestBed.createComponent(AppComponent);
        // поясни за any
        const app:AppComponent = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'bank_spl'`, () => {
        const fixture:any = TestBed.createComponent(AppComponent);
        const app:AppComponent = fixture.componentInstance;
        expect(app.title).toEqual('bank_spl');
    });

    it('should render title', () => {
        const fixture:any = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('.content span')?.textContent)
            .toContain('bank_spl app is running!');
    });
});
