import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {LoginData} from '../models/login-request';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private signUpUrl = 'localhost..';
  constructor(private http: HttpClient) { }

  postSignUpData(signUpForm): Observable<any> {
    return this.http.post<LoginData>(this.signUpUrl, signUpForm.value);
  }
}
