import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from '../../services/auth.service';

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
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  toggleFormMovements() {
    this.slideElements = !this.slideElements;
    this.moveForms.emit(this.slideElements);
  }
}
