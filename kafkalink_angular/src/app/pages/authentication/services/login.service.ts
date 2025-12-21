import { inject, Injectable } from "@angular/core";
import { Controllers } from "../../../core/constants/controller.service";
import { catchError, Observable, throwError } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { login_api_model } from "../models/login.model";

@Injectable({
    providedIn : 'root'
})

export class LoginService{
    
    public controller = inject(Controllers);
    public http = inject(HttpClient);

    public login(apibody : {email : string, password : string}) : Observable<login_api_model>{
        const url = environment.api.auth + this.controller.authentication.login;
        console.log('url--->', url)
        return this.http.post<any>(url, apibody).pipe(
            catchError((error : HttpErrorResponse)=>{
                return throwError(()=> error.error)
            })
        )
    }
}