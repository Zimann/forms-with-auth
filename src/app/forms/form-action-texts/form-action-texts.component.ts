import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {CrossComponentService} from '../../services/cross-component.service';

@Component({
    selector: 'app-form-action-texts',
    templateUrl: './form-action-texts.component.html',
    styleUrls: ['./form-action-texts.component.scss']
})
export class FormActionTextsComponent implements OnInit {

    slideElements = false;
    public isUserSignedUp = this.authService.signedUpSubj;
    public isUserLoggedIn = this.authService.loggedInSubj;
    @Output() moveForms = new EventEmitter<boolean>();
    @Input() triggerFormMovement: boolean;

    constructor(private authService: AuthService,
                private crossComponentService: CrossComponentService) {
    }

    ngOnInit() {

    }

    toggleFormMovements() {

        // used to reset forms on sliding
        if (this.slideElements) {
            this.crossComponentService.resetLoginForm$.next(true);
        } else {
            this.crossComponentService.resetSignUpForm$.next(true);
        }

        this.slideElements = !this.slideElements;

        this.moveForms.emit(this.slideElements);
        this.crossComponentService.resetLoginForm$.next(true);
    }
}
