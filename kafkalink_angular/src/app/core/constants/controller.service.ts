import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class Controllers {

    public readonly authentication = {
        login: 'http://8001/login',
        signup: 'http://8002/signup'
    };
}