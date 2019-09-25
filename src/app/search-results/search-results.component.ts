import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/news-api.service';
import { Article } from 'src/app/article';
import { SearchResultService } from 'src/app/search-result.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  searchResults;
  articles: Article[];

  constructor(private newsApiService: NewsApiService, private searchResultSrv: SearchResultService) {
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

    this.searchResultSrv.change.subscribe(result => {
      this.articles = [];
    });
  }
}
