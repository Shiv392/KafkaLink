import { HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn : 'root'
})
export class SharedService{
    

    public get_querystring_payload(apibody: Record<string, any>): HttpParams {
        console.log('apiody---->', apibody)
        let params = new HttpParams();
        Object.keys(apibody).forEach(key => {
          let value = apibody[key];
          if (apibody[key] !== null && apibody[key] !=undefined && apibody[key]!='') {
            params = params.set(key, value);
          }
        });
    
        return params;
      }
}