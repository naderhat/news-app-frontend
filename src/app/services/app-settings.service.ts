import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  constructor(private http: HttpClient) {}

  public getNewsCountries(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/news/countries`);
  }

  public getNewsCategories(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/news/categories`);
  }
}
