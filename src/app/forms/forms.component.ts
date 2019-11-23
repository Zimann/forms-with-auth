import {Component} from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
  providers: [AuthService]
})
export class FormsComponent {

  public initiateSlide: boolean;
  constructor() {
  }

  moveForms(data: boolean) {
    this.initiateSlide = data;
  }
}
