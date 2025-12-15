import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth-guard-guard';

export const routes: Routes = [
    {
        path : 'auth',
        loadChildren : ()=> import('./pages/authentication/authentication.routes').then(route=> route.authenticaion_routes)
    },
    {
        path : 'app',
        loadChildren : ()=> import('./pages/layout/layout.routes').then(route => route.layout_routes),
        canActivate : [AuthGuard]
    },
    {
        path : '', redirectTo : 'auth/login', pathMatch : 'full'
    },
    {
        path : '**', loadComponent : ()=> import('./pages/not-found/not-found').then(component=> component.NotFound)
    }
];
