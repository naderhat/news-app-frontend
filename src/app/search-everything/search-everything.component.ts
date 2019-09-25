import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/news-api.service';
import { DatePipe } from '@angular/common';
import { SearchResultService } from 'src/app/search-result.service';

@Component({
  selector: 'app-search-everything',
  templateUrl: './search-everything.component.html',
  styleUrls: ['./search-everything.component.css']
})
export class SearchEverythingComponent implements OnInit {
  sources;
  selectedSource;
  apiDateFormat = 'yyyy-MM-ddThh:mm:ss';

  constructor(private newsApiService: NewsApiService, private searchResultSrv: SearchResultService,
    private datePipe: DatePipe) {
    this.sources = new Array();
  }

  ngOnInit() {
    this.newsApiService.getSources().subscribe(data => {
      this.sources = data['sources'];
    });

    this.selectedSource = '';
    this.searchResultSrv.clearSearchResult();
  }

  performSearch(query: string, fromDate: string, toDate: string) {
    fromDate = this.datePipe.transform(fromDate, this.apiDateFormat);
    toDate = this.datePipe.transform(toDate, this.apiDateFormat);
    this.newsApiService.performSearchEverything(query, this.selectedSource, fromDate, toDate);
  }
}
