import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';

export const HTTPInterceptor: HttpInterceptorFn = (req, next) => {
  let clone_request = req;

  return next(clone_request);
};
