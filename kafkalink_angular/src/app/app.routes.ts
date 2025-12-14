import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : 'auth',
        loadChildren : ()=> import('./pages/authentication/authentication.routes').then(route=> route.authenticaion_routes)
    },
    {
        path : 'app',
        loadChildren : ()=> import('./pages/layout/layout.routes').then(route => route.layout_routes)
    },
    {
        path : '', redirectTo : 'auth/login', pathMatch : 'full'
    }
];
