import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { Subscription } from 'rxjs';
import {Toast} from 'primeng/toast';
import {MessageService} from 'primeng/api'

@Component({
  selector: 'app-notification',
  imports: [Toast],
  templateUrl: './notification.html',
  styleUrl: './notification.scss',
  providers : [MessageService]
})
export class Notification implements OnInit, OnDestroy {

public notification_service = inject(NotificationService);
private message_service = inject(MessageService);

public subscription : Subscription = new Subscription();

ngOnInit(): void {
  const subscribe = this.notification_service.notification_subject.subscribe((data : {summary : string, detail : string, type : string})=>{
    console.log('notification service calling', data);
    if(data.type == 'success'){
     this.success_notification({summary : data.summary, detail : data.detail});
    }
    else if(data.type == 'error'){
      this.error_notification({summary : data.summary, detail : data.detail})
    }
  });
  this.subscription.add(subscribe);
}

public success_notification = (data : {summary : string, detail : string})=>{
this.message_service.add({summary : data.summary, detail : data.detail, severity : 'success'});
}

public error_notification = (data : {summary : string, detail : string})=>{
  this.message_service.add({summary : data.summary, detail : data.detail, severity : 'error'});
}

ngOnDestroy(): void {
  this.subscription.unsubscribe();
}
}
