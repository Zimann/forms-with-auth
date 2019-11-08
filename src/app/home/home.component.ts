import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {fromEvent, Subscription, timer} from 'rxjs';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showMenu = false;
  bringInSlide = false;
  outSideClickSubj: Subscription;
  listenForOutsideClicks$ = fromEvent(document, 'click');

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
    this.showMenu = !this.showMenu;
    if (this.showMenu === true) {
      let currentTarget: Element;
      // listen for clicks outside the settings menu
      this.outSideClickSubj = this.listenForOutsideClicks$
          .pipe(take(2))
          .subscribe(event => {
        currentTarget = event.target as Element;
        if (currentTarget.className !== 'fas fa-cogs') {
          event.preventDefault();
          this.showMenu = false;
        }
      });
    } else {
      if (this.outSideClickSubj) {
        this.outSideClickSubj.unsubscribe();
      }
    }
  }
}

