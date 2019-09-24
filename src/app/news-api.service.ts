import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key = '73e1750911db453f9077c789bf6b9010';

  searchResults;

  searchResultFetched = new Subject<void>();

  constructor(private http: HttpClient) { }

  performSearchTopHeadlines(query: string, country: string, category: string) {
    this.getTopHeadlines(query, country, category)
      .subscribe(result => { this.searchResults = result; this.searchResultFetched.next(); });
  }

  performSearchEverything(query: string, sources: string, from: string, to: string) {
    this.getEverything(query, sources, from, to)
      .subscribe(result => { this.searchResults = result; this.searchResultFetched.next(); });
  }

  getTopHeadlines(query: string, country: string, category: string) {
    let baseUrl: string;
    let url: string;

    baseUrl = 'https://newsapi.org/v2/top-headlines';

    url = this.buildURL(query, baseUrl, country, category, '', '', '');
    return this.http.get(url);
  }

  getEverything(query: string, sources: string, from: string, to: string) {
    let baseUrl: string;
    let url: string;

    baseUrl = 'https://newsapi.org/v2/everything';

    url = this.buildURL(query, baseUrl, '', '', sources, from, to);
    return this.http.get(url);
  }

  buildURL(query: string, baseUrl: string, country: string, category: string, sources: string, from: string, to: string) {
    let params: string;
    let url: string;

    if (!this.isEmpty(query)) {
      params = 'q=' + query;
    }

    if (!this.isEmpty(country)) {
      if (!this.isEmpty(params)) {
        params += '&';
      }
      params += 'country=' + country;
    }

    if (!this.isEmpty(category)) {
      if (!this.isEmpty(params)) {
        params += '&';
      }
      params += 'category=' + category;
    }

    if (!this.isEmpty(sources)) {
      if (!this.isEmpty(params)) {
        params += '&';
      }
      params += 'sources=' + sources;
    }

    if (!this.isEmpty(from)) {
      if (!this.isEmpty(params)) {
        params += '&';
      }
      params += 'from=' + from;
    }

    if (!this.isEmpty(to)) {
      if (!this.isEmpty(params)) {
        params += '&';
      }
      params += 'to=' + to;
    }

    if (!this.isEmpty(params)) {
      url = baseUrl + '?' + params + '&apiKey=' + this.api_key;
    } else {
      url = baseUrl + '?' + 'apiKey=' + this.api_key;
    }
    return url;
  }

  isEmpty(str: string) {
    return (!str || str.length === 0);
  }

  getSearchResults() {
    return this.searchResults;
  }
}
