import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-form-action-texts',
  templateUrl: './form-action-texts.component.html',
  styleUrls: ['./form-action-texts.component.scss']
})
export class FormActionTextsComponent implements OnInit {

  slideElements = false;
  @Output() moveForms = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  toggleFormMovements() {
    this.slideElements = !this.slideElements;
    this.moveForms.emit(this.slideElements);
  }
}
