import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-profile-slide',
  templateUrl: './profile-slide.component.html',
  styleUrls: ['./profile-slide.component.scss']
})
export class ProfileSlideComponent implements OnInit {

  @Input() slideIn: boolean;
  @Output() slideOutEmitter = new EventEmitter<boolean>();
  profileForm: any;

  constructor() { }

  slideOut() {
    this.slideOutEmitter.emit(false);
  }

  ngOnInit() {
  }

}
