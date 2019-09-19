import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NewsApiService } from 'src/app/news-api.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchNews: FormControl;
  newsApiService: NewsApiService;
  result: string;

  constructor(newsApiService: NewsApiService) {
    this.newsApiService = newsApiService;
  }

  ngOnInit() {
    this.searchNews = new FormControl();
  }

  performSearch(query: string) {
    const result = this.newsApiService.getTopHeadlines(query, '', '').subscribe((data => console.log(data)));
  }

}
