import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import Routes from '../../shared/routes/routes';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {

  @Output() profileEmitter = new EventEmitter<boolean>();
  @Input() displayMenu: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logOut() {
    localStorage.clear();
    this.router.navigate([Routes.AUTHENTICATION]);
  }

  showProfile() {
    this.profileEmitter.emit(true);
  }

}
