import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticateInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(httpRequest.clone({
      headers: httpRequest.headers.set('Authorization', localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : '')
        .set('userid', localStorage.getItem('employeeID') || '')
    }))
  }
}

