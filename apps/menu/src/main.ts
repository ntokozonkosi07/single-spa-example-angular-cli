import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { platformSingleSpa } from 'single-spa-angular-cli';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformSingleSpa.mount('menu').subscribe(({ props, attachUnmount }) => {
  platformBrowserDynamic().bootstrapModule(AppModule).then((m) => {
    attachUnmount(m);
    // Do something with props if you want
    // Ex : module.instance.setSomething(...)
  });
});
