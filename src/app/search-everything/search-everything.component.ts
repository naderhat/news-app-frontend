import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/news-api.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-search-everything',
  templateUrl: './search-everything.component.html',
  styleUrls: ['./search-everything.component.css']
})
export class SearchEverythingComponent implements OnInit {
  sources;

  constructor(public newsApiService: NewsApiService, public datePipe: DatePipe) {
    this.sources = new Array();
  }

  ngOnInit() {
  }

  performSearch(query: string, fromDate: string) {
    fromDate = this.datePipe.transform(fromDate, 'yyyy-MM-ddThh:mm:ss');
    this.newsApiService.performSearchEverything(query, '', fromDate, '');
  }
}
