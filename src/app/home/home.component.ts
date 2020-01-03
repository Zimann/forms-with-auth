import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {fromEvent, of, pipe, ReplaySubject, Subscription, timer} from 'rxjs';
import {take, takeUntil} from 'rxjs/operators';
import Routes from '../shared/routes/routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  showMenu = false;
  bringInSlide = false;
  outSideClickSubj: Subscription;
  listenForOutsideClicks$ = fromEvent(document, 'click');
  private destroyed$ = new ReplaySubject(1);

  constructor(private router: Router) { }

  ngOnInit() {
    let departureMomentDate;

    // add local storage timeStamp when navigating away
    window.addEventListener('beforeunload', (e) => {
      departureMomentDate = Math.round(new Date().getTime() / 1000);
      localStorage.setItem('departureMomentDate', String(departureMomentDate));
    });
    // route user back to the authentication page once the token expires
    const tokenExpiryTime = Number(localStorage.getItem('tokenExpiry')) * 1000;
    const tokenExpiry$ = timer(tokenExpiryTime);
    tokenExpiry$
        .pipe(takeUntil(this.destroyed$))
        .subscribe(() => {
      localStorage.clear();
      this.router.navigate([Routes.AUTHENTICATION]);
    });
  }

  logOut() {
    localStorage.clear();
    this.router.navigate([Routes.AUTHENTICATION]);
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

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}

