import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, Profile } from 'src/app/models';
import { environment } from 'src/environments/environment';
import { first, map } from 'rxjs/operators';
import { AlertService } from './alert.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private alertService: AlertService) {}

  register(user: User) {
    return this.http.post(`${environment.apiUrl}/user/register`, user);
  }

  saveProfile(updatedNewsCountries: string[], updatedNewsCategories) {
    const body = {
      countryCodes: updatedNewsCountries,
      categories: updatedNewsCategories
    };
    const config = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    return this.http
      .post<any>(`${environment.apiUrl}/user/profile`, body, config)
      .subscribe(data => {
        data['error'] !== ''
          ? this.alertService.error(data['error'], true)
          : this.alertService.success(data['message'], true);
      });
  }

  retrieveProfile(): Observable<any> {
    return this.http.get<Profile>(`${environment.apiUrl}/user/profile`);
  }
}
