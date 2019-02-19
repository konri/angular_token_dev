import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StartUpService} from '../shared/services/startup.service';
import {AuthorizationService} from '../shared/services/authorization.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

  ],
  providers: [
    StartUpService,
    AuthorizationService,
    {
      provide: APP_INITIALIZER,
      useFactory: startUpFactory,
      deps: [StartUpService, HttpClientModule],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}

export function startUpFactory(startupService: StartUpService): Function {
  return () => startupService.load();
}
