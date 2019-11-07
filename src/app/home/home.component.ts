import {Component, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showMenu = false;
  bringInSlide = false;
  constructor(private router: Router,
              private renderer: Renderer2) { }

  ngOnInit() {
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

