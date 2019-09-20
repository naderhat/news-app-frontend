import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NewsApiService } from 'src/app/news-api.service';
import { Subject } from 'rxjs/internal/Subject';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchNews: FormControl;
  newsApiService: NewsApiService;
  result: string;

  searchResults;

  constructor(newsApiService: NewsApiService) {
    this.newsApiService = newsApiService;
  }

  ngOnInit() {
    this.searchNews = new FormControl();
  }

  performSearch(query: string) {
    this.newsApiService.performSearch(query);
  }

}
