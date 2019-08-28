import {Component} from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  public initiateSlide: boolean;
  constructor() {
  }

  moveForms(data: boolean) {
    this.initiateSlide = data;
  }
}
