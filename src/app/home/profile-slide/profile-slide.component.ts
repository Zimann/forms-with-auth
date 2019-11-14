import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BehaviorSubject, Observable, ReplaySubject, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
// import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-profile-slide',
  templateUrl: './profile-slide.component.html',
  styleUrls: ['./profile-slide.component.scss']
})
export class ProfileSlideComponent implements OnInit, OnDestroy {

  @Input() slideIn: boolean;
  @Output() slideOutEmitter = new EventEmitter<boolean>();
  private destroyed$ = new ReplaySubject(1);
  public userNameTracker$ = new BehaviorSubject<string>('');
  public hideError = true;
  public showUpdatedSuccess = false;
  nameForm: FormGroup;
  statusForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  get userName() {
    return this.nameForm.get('user_name');
  }

  get userStatus() {
    return this.statusForm.get('status');
  }

  ngOnInit() {

    this.nameForm = this.formBuilder.group({
      user_name: ['', [
        Validators.maxLength(5)
      ]]
    });
    this.statusForm = this.formBuilder.group({
      status: ['']
    });

    // this is where we get data for our two user related inputs
    this.nameForm.valueChanges
        .pipe(takeUntil(this.destroyed$))
        .subscribe(value => {
          this.userNameTracker$.next(value.user_name);
          // console.log(value.user_name);
          // handles hiding error messages when typing is detected
          // if (value.email !== '') {
          //   this.loginChecker.email = true;
          // }
          // if (value.password !== '') {
          //   this.loginChecker.password = true;
          // }
        });
  }


  onSubmitUserName() {

    // send updated user name to the server
    if (this.userName.invalid) {
      this.hideError = false;
    } else {
      console.log('success');
      this.showUpdatedSuccess = true;
      this.hideError = true;
    }

  }

  slideOut() {
    this.slideOutEmitter.emit(false);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }


}
