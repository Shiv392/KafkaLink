import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const ErrorInterceptor : HttpInterceptorFn = (req, next) => {
  
  return next(req).pipe(
    catchError((error : HttpErrorResponse)=>{
      let message : string = '';

     if(error.error?.message){
      message = error.error.message
     }
     else if(typeof error.error == 'string'){
      message = error.error
     }

    //  switch(error.status){
    //   case 400:
    //     console.log('un')
    //  }
      return throwError(()=> error)
    })
  )
};
