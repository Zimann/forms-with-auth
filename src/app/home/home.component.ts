import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {timer} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showMenu = false;
  bringInSlide = false;
  constructor(private router: Router) { }

  ngOnInit() {

    // route user back to the authentication page once the token expires
    const tokenExpiryTime = Number(localStorage.getItem('tokenExpiry')) * 1000;
    const tokenExpiry$ = timer(tokenExpiryTime);
    tokenExpiry$.subscribe(() => {
      localStorage.clear();
    });
    if (Object.keys(localStorage).length === 0) {
      this.router.navigate(['/authentication']);
    }
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/authentication']);
  }

  showProfileSection(data: boolean) {
    this.bringInSlide = data;
  }

  setSlidingState() {
    return this.bringInSlide;
  }

  showSettingsMenu() {
    console.log('clicked');
    this.showMenu = !this.showMenu;
  }
}

