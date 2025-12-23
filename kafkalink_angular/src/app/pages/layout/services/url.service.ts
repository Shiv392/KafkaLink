import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Controllers } from "../../../core/constants/controller.service";
import { catchError, Observable, throwError } from "rxjs";
import {environment} from '../../../../environments/environment';
import { SharedService } from "../../../shared/services/shared.service";
import { get_urls_apimodel, post_url_apimodel } from "../models/urls.model";

@Injectable({
    providedIn : 'root'
})

export class URLService{
    public http = inject(HttpClient);
    public controller = inject(Controllers);
    public shared_service = inject(SharedService);

    public get_urls(apibody : any) : Observable<get_urls_apimodel>{
    const params = this.shared_service.get_querystring_payload(apibody);
    const url = environment.api.url + this.controller.url_dashboard.urls;
    return this.http.get<get_urls_apimodel>(url, {params, withCredentials : true}).pipe(
        catchError((error : HttpErrorResponse)=>{
            return throwError(()=> error.error)
        })
    )
    }

    public add_url(apibody : any) : Observable<post_url_apimodel>{
    const url: string = environment.api.url + this.controller.url_dashboard.urls;
    return this.http.post<post_url_apimodel>(url, apibody, {withCredentials : true}).pipe(
        catchError((error : HttpErrorResponse)=>{
            return throwError(()=> error.error)
        })
    )
    }

    public edit_url(apibody : any) : Observable<any>{
        const url: string = environment.api + this.controller.url_dashboard.urls;
        return this.http.patch(url, apibody, {withCredentials : true}).pipe(
            catchError((error : HttpErrorResponse)=>{
                return throwError(()=> error.error)
            })
        )
    }

    public delete_url(apibody : any) : Observable<any>{
        const url: string = environment.api + this.controller.url_dashboard.urls;
        const params = this.shared_service.get_querystring_payload(apibody);
        return this.http.delete(url, {params, withCredentials : true}).pipe(
            catchError((error : HttpErrorResponse)=>{
                return throwError(()=> error.error)
            })
        )
    }
}