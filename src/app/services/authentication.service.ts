import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem(AUTHENTICATED_USER)));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/user/authenticate`, { email, password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.jwtToken) {
          // Store user details and jwt token in local storage to keep user logged in between page refreshes
          sessionStorage.setItem(AUTHENTICATED_USER, JSON.stringify(user));
          sessionStorage.setItem(TOKEN, `Bearer ${user.jwtToken}`);
          this.currentUserSubject.next(user);
        }
        return user;
      }));
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(TOKEN);
    }
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  logout() {
    // remove user from local storage to log user out
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
    this.currentUserSubject.next(null);
  }
}
