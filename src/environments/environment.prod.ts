import {TranslateLoader} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {createTranslateLoader} from "../app/app.module";

export const environment = {
  production: true,
  ngxTranslateConfig: {
    defaultLanguage: 'en',
    loader: {
      provide: TranslateLoader,
      useFactory: createTranslateLoader,
      deps: [HttpClient]
    }
  }
};
