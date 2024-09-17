import {
  ApplicationConfig,
  enableProdMode,
  NgZone,
  provideZoneChangeDetection,
} from '@angular/core';
import { Router, NavigationStart, provideRouter } from '@angular/router';
import {
  singleSpaAngular,
  getSingleSpaExtraProviders,
} from 'single-spa-angular';
import { environment } from './environments/environment';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';
import { APP_BASE_HREF } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

const lifecycles = singleSpaAngular({
  bootstrapFunction: (singleSpaProps) => {
    singleSpaPropsSubject.next(singleSpaProps);

    const appConfig: ApplicationConfig = {
      providers: [
        { provide: APP_BASE_HREF, useValue: '/dashboard' },
        getSingleSpaExtraProviders(),
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
      ],
    };

    const bootstrapApp = bootstrapApplication(AppComponent, appConfig);
    bootstrapApp.catch((err) => console.error(err));

    return bootstrapApp;
  },
  template: '<app-dashboard-root>',
  Router,
  NavigationStart,
  NgZone,
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
