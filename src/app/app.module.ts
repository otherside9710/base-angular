import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {RestComponent} from './rest/rest.component';
import {HttpClientModule} from '@angular/common/http';
import {app_routing} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    RestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    app_routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
