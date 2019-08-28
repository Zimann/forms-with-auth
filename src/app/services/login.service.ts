import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginData} from '../models/login-request';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // TODO post the data to a built access point
  private loginUrl = 'localhost..';
  constructor(private http: HttpClient) { }

  postLoginData(loginForm): Observable<any> {
    return this.http.post<LoginData>(this.loginUrl, loginForm.value);
  }
}
