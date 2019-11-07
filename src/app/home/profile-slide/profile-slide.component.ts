import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-slide',
  templateUrl: './profile-slide.component.html',
  styleUrls: ['./profile-slide.component.scss']
})
export class ProfileSlideComponent implements OnInit {

  @Input() slideIn: boolean;

  constructor() { }

  ngOnInit() {
  }

}
