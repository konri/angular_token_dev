import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {AuthResponse} from '../interfaces/AuthResponse';

@Injectable()
export class AuthorizationService {

  public get authorizationData(): AuthResponse {
    return this._authorizationData;
  }

  private _authorizationData: AuthResponse;

  constructor(private httpClient: HttpClient) {
  }

  getUserInfo(): Observable<AuthResponse> {
    // here you can send user and password in real server...
    const body = {username: 'username', password: 'password'};
    return this.httpClient.post('localhost:3000/token', body)
      .pipe(
        tap((res: AuthResponse) => {
          this._authorizationData = res;
        })
      );
  }
}
