import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';
import { apiKeys } from './apiKeys';

interface SignUpResponse {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}

@Injectable()
export class AuthService {
    firebaseAPIKey = apiKeys;
    signUpEndpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.firebaseAPIKey}`;
    logInEndpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.firebaseAPIKey}`;
    failedSignUpMessage = `There was a problem with the sign up
                         or the email address is already registered!`;
    failedLogInMessage = 'The email/password is incorrect';

    signedUpSubj = new Subject();
    loggedInSubj = new Subject();
    signUpLoaderSubj = new Subject();
    logInLoaderSubj = new Subject();
    constructor(private http: HttpClient,
                private router: Router) {}

    signUpUser(email: string, password: string) {

        this.signUpLoaderSubj.next(false);
        this.http.post<SignUpResponse>(this.signUpEndpoint, {
            email,
            password,
            returnSecureToken: true
        }).subscribe(
            () => {
                this.signedUpSubj.next(true);
                this.signUpLoaderSubj.next(true);
            },
            () => {
                this.signedUpSubj.next(this.failedSignUpMessage);
                this.signUpLoaderSubj.next(true);
            });
    }

    logInUser(email: string, password: string) {
        this.logInLoaderSubj.next(false);
        this.http.post<SignUpResponse>(this.logInEndpoint, {
            email,
            password,
            returnSecureToken: true
        }).subscribe(
            (data) => {
                const requestMomentDate = new Date().getTime();
                localStorage.setItem('requestMomentDate', String(requestMomentDate));
                localStorage.setItem('tokenExpiry', data.expiresIn);
                this.loggedInSubj.next(true);
                this.logInLoaderSubj.next(true);
                this.router.navigate(['/home']);
            },
            () => {
                this.loggedInSubj.next(this.failedLogInMessage);
                this.logInLoaderSubj.next(true);
            });
    }
}
