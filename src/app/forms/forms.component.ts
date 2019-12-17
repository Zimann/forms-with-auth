import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import Routes from '../shared/routes/routes';

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
    const timeDif = Number(localStorage.getItem('departureMomentDate')) - Number(localStorage.getItem('requestMomentDate'));
    if (timeDif < Number(localStorage.getItem('tokenExpiry')) && localStorage.getItem('requestMomentDate')) {
      this.router.navigate([Routes.HOME]);
    }
  }
}
