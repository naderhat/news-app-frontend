import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { AuthenticationService } from 'src/app/services';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterAuthService implements HttpInterceptor {
  constructor(private authService: AuthenticationService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authenticatedToken = this.authService.getAuthenticatedToken();
    const authenticatedUser = this.authService.getAuthenticatedUser();

    if (authenticatedUser && authenticatedToken) {
      console.log(request.headers);
      request = request.clone({
        setHeaders: {
          Authorization: authenticatedToken
        }
      });
    }

    console.log(request.headers);

    return next.handle(request);
  }
}
