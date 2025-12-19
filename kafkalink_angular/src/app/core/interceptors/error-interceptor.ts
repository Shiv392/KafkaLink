import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { NotificationService } from '../../shared/services/notification.service';

export const ErrorInterceptor : HttpInterceptorFn = (req, next) => {

  const notification_service = inject(NotificationService);
  
  return next(req).pipe(
    catchError((error : HttpErrorResponse)=>{
      let message : string = '';
      console.log('error--->', error);
     if(error.error?.message){
      message = error.error.message
     }
     else if(typeof error.error == 'string'){
      message = error.message
     }

     notification_service.notification_subject.next({type : 'error', summary : 'Error', detail : message || error.message})
      return throwError(()=> error)
    })
  )
};
