import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {takeUntil} from 'rxjs/operators';
import {ReplaySubject, Subscription} from 'rxjs';
import {AuthService} from '../../services/auth.service';
import {CrossComponentService} from '../../services/cross-component.service';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit, OnDestroy, AfterViewInit {

    @Input() formMoveInitiated: boolean;
    @ViewChild('forgottenPassRef', {static: false}) forgottenPassRef: ElementRef;

    private destroyed$ = new ReplaySubject(1);

    public bringInForgottenPass = false;
    public forgottenSubmitted = false;
    public isUserSignedIn = this.authService.loggedInSubj;
    public loaderSub = this.authService.logInLoaderSubj;
    public loginForm: FormGroup;
    public forgottenPassForm: FormGroup;

    public signInSub: Subscription;

    public loginChecker = {
        email: true,
        password: true
    };

    constructor(private formBuild: FormBuilder,
                private authService: AuthService,
                private crossComponentService: CrossComponentService) {
    }

    get loginEmail() {
        return this.loginForm.get('email');
    }

    get loginPassword() {
        return this.loginForm.get('password');
    }

    get forgottenPassEmail() {
        return this.forgottenPassForm.get('forgottenPassEmail');
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

    bringInForgottenPassword() {
        this.bringInForgottenPass = !this.bringInForgottenPass;
        this.forgottenPassRef.nativeElement.focus();
    }

    onSubmitForgottenPass() {

        // show confirmation message
        this.forgottenSubmitted = true;
        setTimeout(() => {
            this.forgottenSubmitted = false;
            this.bringInForgottenPass = false;
            this.forgottenPassForm.reset();
        }, 800);

        // send the new password to the provided email address
    }

    ngOnInit(): void {

        this.signInSub = this.crossComponentService.resetLoginForm$
            .pipe(takeUntil(this.destroyed$))
            .subscribe(data => {
            if (data) {
                this.loginForm.reset();
            }
        });

        this.forgottenPassForm = this.formBuild.group({
            forgottenPassEmail: ['', [
                Validators.email,
                Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')
            ]]
        });

        // Login Form validation
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
            .pipe(
                takeUntil(this.destroyed$)
            )
            .subscribe(value => {
                if (this.bringInForgottenPass) {
                    this.bringInForgottenPass = false;
                    this.forgottenPassForm.reset();
                }
                // handles hiding error messages when typing is detected
                if (value.email !== '') {
                    this.loginChecker.email = true;
                }
                if (value.password !== '') {
                    this.loginChecker.password = true;
                }
            });
    }

    ngAfterViewInit(): void {
        this.loginForm.reset();
        this.loginForm.markAsPristine();
    }

    ngOnDestroy(): void {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }

}
