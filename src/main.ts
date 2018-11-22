import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { $ } from 'protractor';
if (environment.production) {
  enableProdMode();
  Office.initialize = function () {
    platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
  };
}
$('document').ready(() => {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
});  
