import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppSettingsService } from '../services/app-settings.service';

@Component({
  selector: 'app-news-country',
  templateUrl: './news-country.component.html',
  styleUrls: ['./news-country.component.css']
})
export class NewsCountryComponent implements OnInit {
  @Output()
  countrySelected = new EventEmitter<string>();
  selectedCountry;
  countries;

  constructor(private appSettingService: AppSettingsService) {}

  ngOnInit() {
    this.appSettingService.getNewsCountries().subscribe(data => {
      this.countries = data;
    });

    this.selectedCountry = '';
  }

  selected() {
    this.countrySelected.emit(this.selectedCountry);
  }
}
