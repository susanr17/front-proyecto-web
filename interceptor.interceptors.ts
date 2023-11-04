import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { TokenService } from './services/token.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {


  constructor(private tokenService: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  request = this.addToken(request);
  return next.handle(request).pipe(
    tap(
      (event) => {
        if (event instanceof HttpResponse) {
          console.log(event.status)
          if (event.status === 401) {
              this.tokenService.deleteToken();
          }
        }
      },
      (error) => {
    
      }
    )
  );
  }
  private addToken(request: HttpRequest<unknown>) {
    const token = this.tokenService.getToken();
    if (token) {
      const authrequest = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token).set('Content-Type', 'application/json'),
      });
      request = authrequest;
    } else {
      return request;
    }
    return request;
  }



}
