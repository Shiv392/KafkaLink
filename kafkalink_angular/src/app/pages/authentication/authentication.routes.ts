import { Routes } from "@angular/router";
import { Login } from "./components/login/login";
import { Signup } from "./components/signup/signup";

export const authenticaion_routes : Routes = [
    {
        path : 'login', loadComponent : ()=> import('./components/login/login').then(component=> component.Login)
    },
    {
        path : 'signup', loadComponent : ()=> import('./components/signup/signup').then(component=> component.Signup)
    }
]