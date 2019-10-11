import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NewsApiService } from 'src/app/news-api.service';
import { Subject } from 'rxjs/internal/Subject';
import { AppSettingsService } from 'src/app/services/app-settings.service';
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
  selectedCountry: string;
  selectedCategory: string;

  searchResults;

  constructor(
    newsApiService: NewsApiService,
    appSettingsSrv: AppSettingsService
  ) {
    this.newsApiService = newsApiService;
    this.appSettingsSrv = appSettingsSrv;
  }

  ngOnInit() {
    this.searchNews = new FormControl();
  }
}
