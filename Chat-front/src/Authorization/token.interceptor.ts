import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorizationService } from './Authorization.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private _authorizationService: AuthorizationService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this._authorizationService.isLoggedIn()) {
      const newRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this._authorizationService.getToken()}`,
        },
      });
      return next.handle(newRequest);
    }
    return next.handle(request);
  }
}
