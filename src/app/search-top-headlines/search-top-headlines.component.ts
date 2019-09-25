import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/news-api.service';
import { AppSettingsService } from 'src/app/app-settings.service';
import { FormControl } from '@angular/forms';
import { SearchResultService } from 'src/app/search-result.service';

@Component({
  selector: 'app-search-top-headlines',
  templateUrl: './search-top-headlines.component.html',
  styleUrls: ['./search-top-headlines.component.css']
})
export class SearchTopHeadlinesComponent implements OnInit {
  searchNews: FormControl;
  countries;
  selectedCountry: string;
  selectedCategory: string;

  searchResults;

  categories = ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'];

  constructor(private newsApiService: NewsApiService, private searchResultSrv: SearchResultService,
    private appSettingsSrv: AppSettingsService) {
    this.countries = new Array();
  }

  ngOnInit() {
    this.searchNews = new FormControl();

    this.appSettingsSrv.getCountries().subscribe(data => {
      this.countries = data;
    });
    // Set dropdown to default values when component load
    this.selectedCategory = '';
    this.selectedCountry = '';
    this.searchResultSrv.clearSearchResult();
  }

  performSearch(query: string) {
    this.newsApiService.performSearchTopHeadlines(query, this.selectedCountry, this.selectedCategory.toLowerCase());
  }
}
