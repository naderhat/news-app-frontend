import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key = '';

  constructor(private http: HttpClient) { }

  getTopHeadlines(country: string, category: string) {
    let baseUrl: string;
    let url: string;

    baseUrl = 'https://newsapi.org/v2/top-headlines';

    url = this.buildURL(baseUrl, country, category);
    return this.http.get(url);
  }

  getEverything(country: string, category: string) {
    let baseUrl: string;
    let url: string;

    baseUrl = 'https://newsapi.org/v2/everything?apiKey=';

    url = this.buildURL(baseUrl, country, category);
    return this.http.get(url);
  }

  buildURL(baseUrl: string, country: string, category: string) {
    let params: string;
    let url: string;

    if (!this.isEmpty(country)) {
      params = 'country=' + country;
    }

    if (!this.isEmpty(category)) {
      if (!this.isEmpty(params)) {
        params += '&';
      }
      params += 'category=' + category;
    }

    if (!this.isEmpty(params)) {
      url = baseUrl + '?' + params + 'apiKey=' + this.api_key;
    } else {
      url = baseUrl + '?' + 'apiKey=' + this.api_key;
    }
    return url;
  }

  isEmpty(str: string) {
    return (!str || str.length === 0);
  }
}
