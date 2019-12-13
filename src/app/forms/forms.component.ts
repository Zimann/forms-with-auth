import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
  providers: [AuthService]
})
export class FormsComponent implements OnInit {

  public initiateSlide: boolean;
  constructor(private router: Router) {
  }

  moveForms(data: boolean) {
    this.initiateSlide = data;
  }

  ngOnInit(): void {
    if (Object.keys(localStorage).length !== 0) {
      this.router.navigate(['/home']);
    }
  }
}
