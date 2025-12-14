import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class Controllers {

    public authentication = {
        'login' : 'auth/login',
        'signup' : 'auth/signup'
    }
}