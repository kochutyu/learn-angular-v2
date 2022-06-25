import {NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {environment} from "../environments/environment";

import {AppRoutingModule} from './app-routing.module';
import {TranslateModule} from "@ngx-translate/core";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot(environment.ngxTranslateConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
