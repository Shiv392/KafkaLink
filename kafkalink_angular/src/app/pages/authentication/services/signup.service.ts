import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Controllers } from "../../../core/constants/controller.service";
import { environment } from "../../../../environments/environment";
import { catchError, Observable, throwError } from "rxjs";

@Injectable({
    providedIn : 'root'
})

export class SignupService{
    public http = inject(HttpClient);
    public controller = inject(Controllers);

    public signup(apibody : {name : string, email : string, password : string}) : Observable<{success : boolean, message : string}>{
    const url = environment.service_host+this.controller.authentication.signup;
    return this.http.post<any>(url, apibody).pipe(
        catchError((error : HttpErrorResponse)=>{
            return throwError(()=> error.error)
        })
    )
    }
}