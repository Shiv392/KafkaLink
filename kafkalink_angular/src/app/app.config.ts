import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';


import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { HTTPInterceptor } from './core/interceptors/http-interceptor';
import { ErrorInterceptor } from './core/interceptors/error-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([HTTPInterceptor])),
    provideHttpClient(withInterceptors([ErrorInterceptor])),
    provideRouter(routes),
    provideHttpClient(),
    providePrimeNG({
            theme: {
                preset: Aura
            }
    })
  ]
};