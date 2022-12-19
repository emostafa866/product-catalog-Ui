import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable(
  {providedIn:'root'}
)
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let token= localStorage.getItem('JWT')
      request=request.clone({
     setHeaders:{
      Authorization: 'Bearer '+token
     }
    })

    return next.handle(request);
  }
}

