import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/news-api.service';
import { Article } from 'src/app/article';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  newsApiService: NewsApiService;
  searchResults;
  articles: Article[];

  constructor(newsApiService: NewsApiService) {
    this.newsApiService = newsApiService;
    this.articles = new Array();
  }

  ngOnInit() {
    this.newsApiService.searchResultFetched.subscribe(
      () => {
        this.articles = [];
        this.newsApiService.getSearchResults().articles.map((article: Article) => {
          this.articles.push(article);
        });
      }
    );
  }
}
