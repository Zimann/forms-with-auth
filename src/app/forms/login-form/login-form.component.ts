import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {takeUntil} from 'rxjs/operators';
import {ReplaySubject} from 'rxjs';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit, OnDestroy {

  @Input() formMoveInitiated: boolean;

  private destroyed$ = new ReplaySubject(1);
  private isUserSignedIn = this.authService.loggedInSubj;
  private loaderSub = this.authService.logInLoaderSubj;
  public loginForm: FormGroup;
  public loginChecker = {
    email: true,
    password: true
  };
  constructor( private formBuild: FormBuilder,
               private authService: AuthService) { }

  get loginEmail() {
    return this.loginForm.get('email');
  }

  get loginPassword() {
    return this.loginForm.get('password');
  }

  onSubmitLogin() {

    // check the password and email fields
    if ((this.loginForm.value.email === '' && this.loginForm.value.password === '') ||
        this.loginForm.controls.email.status === 'INVALID' &&
        this.loginForm.controls.password.status === 'INVALID'
    ) {
      this.loginChecker.email = false;
      this.loginChecker.password = false;
      return;
    }
    if (this.loginForm.value.email === '' || this.loginForm.controls.email.status === 'INVALID') {
      this.loginChecker.email = false;
      return;
    }

    if (this.loginForm.value.password === '' || this.loginForm.controls.password.status === 'INVALID') {
      this.loginChecker.password = false;
      return;
    }

    this.authService.logInUser(this.loginEmail.value, this.loginPassword.value);
    this.loginForm.reset();
  }

  ngOnInit() {

    /* Login Form validation
   ----------------------------------------------------- */
    this.loginForm = this.formBuild.group({
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(9)
      ]]
    });

    // this is where we get data from the login form
    this.loginForm.valueChanges
        .pipe(takeUntil(this.destroyed$))
        .subscribe(value => {
          // handles hiding error messages when typing is detected
          if (value.email !== '') {
            this.loginChecker.email = true;
          }
          if (value.password !== '') {
            this.loginChecker.password = true;
          }
        });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
