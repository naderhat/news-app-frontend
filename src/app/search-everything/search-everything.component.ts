import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/news-api.service';

@Component({
  selector: 'app-search-everything',
  templateUrl: './search-everything.component.html',
  styleUrls: ['./search-everything.component.css']
})
export class SearchEverythingComponent implements OnInit {
  newsApiService: NewsApiService;

  constructor(newsApiService: NewsApiService) {
    this.newsApiService = newsApiService;
  }

  ngOnInit() {
  }

  performSearch(query: string) {
    this.newsApiService.performSearch(query);
  }
}
