import { Injectable } from "@angular/core";

@Injectable({
    providedIn : 'root'
})

export class Controllers {

    public readonly login:string =  'http://8001/login';
    public readonly signup: string = 'http://8002/signup'
}