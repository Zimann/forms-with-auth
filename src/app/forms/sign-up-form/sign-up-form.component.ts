import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SignupService} from '../../services/signup.service';
import {take} from 'rxjs/operators';
import {ReplaySubject} from 'rxjs';

@Component({
  selector: 'app-signup-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit, OnDestroy {

  private destroyed$ = new ReplaySubject(1);
  @Input() formMoveInitiated: boolean;
  public signUpSubmitted: boolean;
  public signUpForm: FormGroup;
  public signUpChecker = {
    email: true,
    password: true,
    name: true
  };

  constructor(private formBuild: FormBuilder,
              private signUpService: SignupService) { }

  get signUpEmail() {
    return this.signUpForm.get('email');
  }

  get signUpName() {
    return this.signUpForm.get('name');
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
      this.signUpChecker.name = false;
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

    this.signUpSubmitted = true;
    this.signUpService.postSignUpData(this.signUpForm.value)
      .pipe(take(1))
      .subscribe(
        response => console.log('Success'),
        error => console.log(error)
      );
  }

  ngOnInit() {

    this.signUpForm = this.formBuild.group({
      name : ['', [
        Validators.required
      ]],
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
