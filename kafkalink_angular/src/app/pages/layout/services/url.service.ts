import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Controllers } from "../../../core/constants/controller.service";
import { catchError, Observable, throwError } from "rxjs";
import {environment} from '../../../../environments/environment';

@Injectable({
    providedIn : 'root'
})

export class URLService{
    public http = inject(HttpClient);
    public controller = inject(Controllers);

    public get_urls() : Observable<any>{
    const url = environment.api + this.controller.url_dashboard.urls;
    return this.http.get(url).pipe(
        catchError((error : HttpErrorResponse)=>{
            return throwError(()=> error.error)
        })
    )
    }

    public add_url(apibody : any) : Observable<any>{
    const url: string = environment.api + this.controller.url_dashboard.urls;
    return this.http.post(url, apibody).pipe(
        catchError((error : HttpErrorResponse)=>{
            return throwError(()=> error.error)
        })
    )
    }

    public edit_url(apibody : any) : Observable<any>{
        const url: string = environment.api + this.controller.url_dashboard.urls;
        return this.http.patch(url, apibody).pipe(
            catchError((error : HttpErrorResponse)=>{
                return throwError(()=> error.error)
            })
        )
    }

    public delete_url(apibody : any) : Observable<any>{
        const url: string = environment.api + this.controller.url_dashboard.urls;
        return this.http.delete(url, apibody).pipe(
            catchError((error : HttpErrorResponse)=>{
                return throwError(()=> error.error)
            })
        )
    }
}