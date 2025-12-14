import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn : 'root'
})

export class NotificationService{

    public notification_subject = new Subject<{detail : string, summary : string, type : string}>();

}