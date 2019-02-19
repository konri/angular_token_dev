import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {AuthorizationService} from './authorization.service';

@Injectable()
export class StartUpService {

  constructor(private auth: AuthorizationService) {
  }

  load() {
    return new Promise((resolve, reject) => {
      this.auth.getUserInfo().subscribe(() => {
          resolve(true);
        },
        () => {
          window.location.href = this.getUnauthPage();
          reject(false);
        }
      );
    });
  }

  /**
   * show page with some information that user has not access to service.
   */
  private getUnauthPage(): string {
    return `${environment.domain}/assets/unauthorized/unauthorized.html`;
  }
}
