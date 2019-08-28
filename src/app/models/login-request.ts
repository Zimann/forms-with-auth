export class LoginRequest {
  loginData: LoginData;
  requestType: any = '';
}

export interface LoginData {
  'email': 'string';
  'password': 'string';
}
