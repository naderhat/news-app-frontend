import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NewsApiService } from 'src/app/news-api.service';
import { Subject } from 'rxjs/internal/Subject';
import { AppSettingsService } from 'src/app/app-settings.service';
import { Country } from 'src/app/country';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchNews: FormControl;
  newsApiService: NewsApiService;
  appSettingsSrv: AppSettingsService;
  result: string;
  countries: Country[];
  selectedCountry: string;
  selectedCategory: string;

  categories = ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'];

  searchResults;

  constructor(newsApiService: NewsApiService, appSettingsSrv: AppSettingsService) {
    this.newsApiService = newsApiService;
    this.appSettingsSrv = appSettingsSrv;
    this.countries = new Array();
  }

  ngOnInit() {
    this.searchNews = new FormControl();

    this.appSettingsSrv.getCountries().subscribe(data => {
      console.log(this.countries);
      this.countries = data;
    });
  }

  performSearch(query: string) {
    this.newsApiService.performSearch(query, this.selectedCountry, this.selectedCategory.toLowerCase());
  }

}
