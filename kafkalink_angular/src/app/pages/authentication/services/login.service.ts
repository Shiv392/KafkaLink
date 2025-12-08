import { inject, Injectable } from "@angular/core";
import { Controllers } from "../../../core/constants/controller.service";
import { catchError, Observable, throwError } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "../../../../environments/environment";

@Injectable({
    providedIn : 'root'
})

export class LoginService{
    
    public controller = inject(Controllers);
    public http = inject(HttpClient);

    public login(apibody : {email : string, password : string}) : Observable<{success : boolean, message : string}>{
        const url = environment.service_host + this.controller.authentication.login;
        return this.http.post<any>(url, apibody).pipe(
            catchError((error : HttpErrorResponse)=>{
                return throwError(()=> error.error)
            })
        )
    }
}