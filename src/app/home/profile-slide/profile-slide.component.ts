import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BehaviorSubject, ReplaySubject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-profile-slide',
  templateUrl: './profile-slide.component.html',
  styleUrls: ['./profile-slide.component.scss']
})
export class ProfileSlideComponent implements OnInit, OnDestroy {

  @Input() slideIn: boolean;
  @Output() slideOutEmitter = new EventEmitter<boolean>();
  @ViewChild('userInput', {static: false}) userInput: ElementRef;
  @ViewChild('userIcon', {static: false}) userIcon: ElementRef;
  private destroyed$ = new ReplaySubject(1);
  public userNameTracker$ = new BehaviorSubject<string>('');
  public hideError = true;
  public userNameSubmitted = false;
  public editUserNameClicked = false;
  public showUpdatedName = false;
  public presentUsername: string;
  public nameForm: FormGroup;
  public statusForm: FormGroup;
  public hideDuplicateCheck = true;

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
        Validators.maxLength(35)
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
        });
  }


  // send the updated user name to the server
  onSubmitUserName() {

    if (this.userName.invalid) {
      this.hideError = false;
    } else {
      // detect if the same username is used after editing
      // prevent unnecessary server calls
      if (this.userInput.nativeElement.value === this.presentUsername) {
        this.editUserNameClicked = true;
        return;
      }
      // the call to the server should be placed here
      // the below actions should take place if the request was successful
      this.showUpdatedName = true;
      this.resetUserInputState();

      // hide the confirmation for less UI clutter
      setTimeout(() => {
        this.showUpdatedName = false;
      }, 1500);
    }
  }

  slideOut() {
    this.slideOutEmitter.emit(false);
    this.resetUserInputState();
    this.hideDuplicateCheck = false;

  }

  resetUserInputState() {
    this.hideError = true;
    this.userNameSubmitted = !this.userNameSubmitted;
    this.editUserNameClicked = false;
    this.userInput.nativeElement.blur();
  }

  // executed when clicking the 'edit' icon
  activateUserInput() {
    this.userInput.nativeElement.focus();
    this.showUpdatedName = false;
    this.editUserNameClicked = true;
    this.presentUsername = this.userInput.nativeElement.value;
    this.hideDuplicateCheck = true;
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
