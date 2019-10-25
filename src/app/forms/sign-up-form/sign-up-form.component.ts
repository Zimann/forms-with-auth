import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ReplaySubject} from 'rxjs';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit, OnDestroy {

  private destroyed$ = new ReplaySubject(1);
  private isUserSignedUp = this.authService.signedUpSubj;
  private loaderSub = this.authService.signUpLoaderSubj;
  @Input() formMoveInitiated: boolean;
  public signUpForm: FormGroup;
  public signUpChecker = {
    email: true,
    password: true,
  };

  constructor(private formBuild: FormBuilder,
              private authService: AuthService) { }

  get signUpEmail() {
    return this.signUpForm.get('email');
  }

  get signUpPassword() {
    return this.signUpForm.get('password');
  }

  onSubmitSignUp() {
    // check the password, email and name fields
    if ((this.signUpForm.value.email === '' && this.signUpForm.value.password === '' && this.signUpForm.value.name === '') ||
        this.signUpForm.controls.email.status === 'INVALID' &&
        this.signUpForm.controls.password.status === 'INVALID' &&
        this.signUpForm.controls.name.status === 'INVALID'
    ) {
      this.signUpChecker.email = false;
      this.signUpChecker.password = false;
      return;
    }
    if (this.signUpForm.value.email === '' || this.signUpForm.controls.email.status === 'INVALID') {
      this.signUpChecker.email = false;
      return;
    }

    if (this.signUpForm.value.password === '' || this.signUpForm.controls.password.status === 'INVALID') {
      this.signUpChecker.password = false;
      return;
    }

    this.authService.signUpUser(this.signUpEmail.value, this.signUpPassword.value);
    this.signUpForm.reset();
  }

  ngOnInit() {

    this.signUpForm = this.formBuild.group({
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
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
