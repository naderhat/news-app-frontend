import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  countries: string[];

  constructor(private http: HttpClient) {
    this.getCountries().subscribe(data => {
      this.countries.push(data);
    });
  }

  public getCountries(): Observable<any> {
    return this.http.get('./assets/countries.data');
  }
}
