import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Subject} from 'rxjs';
import {Router} from '@angular/router';

interface SignUpResponse {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    signUpEndpoint = `http://192.168.1.78:8080/server/rest/user/register`;
    logInEndpoint = `http://192.168.1.78:8080/server/rest/user/authenticate`;
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
            password
        }).subscribe(
            () => {
                this.signedUpSubj.next(true);
                this.signUpLoaderSubj.next(true);
            },
            (error) => {
                this.signedUpSubj.next(this.failedSignUpMessage);
                this.signUpLoaderSubj.next(true);
            });
    }

    logInUser(email: string, password: string) {
        this.logInLoaderSubj.next(false);
        this.http.post<SignUpResponse>(this.logInEndpoint, {
            email,
            password
        }).subscribe(
            (data) => {
                this.loggedInSubj.next(true);
                this.logInLoaderSubj.next(true);
                this.router.navigate(['/home']);
            },
            (error) => {
                this.loggedInSubj.next(this.failedLogInMessage);
                this.logInLoaderSubj.next(true);
            });
    }
}
