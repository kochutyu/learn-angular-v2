import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

interface IlabelValue {
  label: string;
  value: unknown;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private translateService: TranslateService
  ) {
  }

  languages: IlabelValue[] = [
    {value: 'en', label: 'LANGUAGES.EN'},
    {value: 'ua', label: 'LANGUAGES.UA'}
  ];

  changeLanguage(lang: string): void {
    console.log(lang)
    this.translateService.use(lang);
  }
}
