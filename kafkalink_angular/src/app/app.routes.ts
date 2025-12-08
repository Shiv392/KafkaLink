import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : 'auth',
        loadChildren : ()=> import('./pages/authentication/authentication.routes').then(route=> route.authenticaion_routes)
    },
    {
        path : '', redirectTo : 'auth/login', pathMatch : 'full'
    }
];
