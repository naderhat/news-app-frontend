import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthenticationService } from 'src/app/services';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterAuthService implements HttpInterceptor {

  constructor(private authService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const authenticatedToken = this.authService.getAuthenticatedToken();
    const authenticatedUser = this.authService.getAuthenticatedUser();

    if (authenticatedUser && authenticatedToken) {
      request = request.clone({
        setHeaders: {
          Authorization: authenticatedToken
        }
      });
    }

    return next.handle(request);
  }
}
