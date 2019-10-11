import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/news-api.service';
import { AppSettingsService } from 'src/app/services/app-settings.service';
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

  constructor(
    private newsApiService: NewsApiService,
    private searchResultSrv: SearchResultService,
    private appSettingsSrv: AppSettingsService
  ) {
    this.countries = new Array();
  }

  ngOnInit() {
    this.searchNews = new FormControl();

    this.appSettingsSrv.getNewsCountries().subscribe(data => {
      this.countries = data;
    });

    // Set dropdown to default values when component load
    this.selectedCountry = '';
    this.searchResultSrv.clearSearchResult();
  }

  setSelectedCategory(categorySelected: string) {
    this.selectedCategory = categorySelected;
  }

  setSelectedCountry(countrySelected: string) {
    this.selectedCountry = countrySelected;
  }

  performSearch(query: string) {
    this.newsApiService.performSearchTopHeadlines(
      query,
      this.selectedCountry,
      this.selectedCategory.toLowerCase()
    );
  }
}
