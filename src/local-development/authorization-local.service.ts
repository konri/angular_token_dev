import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthResponse } from 'src/app/shared/interfaces/AuthResponse';
import { localToken } from 'src/local-development/local-token';


@Injectable()
export class AuthorizationService {
  public get authorizationData(): AuthResponse {
    return this._authorizationData;
  }

  private _authorizationData: AuthResponse = {
    token: localToken,
    expires_in: null,
    userName: 'devUser',
    email: 'local-user@gmail.com'
  };

  constructor() {
  }

  getUserInfo(): Observable<AuthResponse> {
    console.warn('WARNING: LOCAL FILE, THAT INFORMATION SHOULD NOT SEE ON PRODUCTION', this.authorizationData);
    return of(this._authorizationData);
  }
}
