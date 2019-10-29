import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges
} from '@angular/core';
import { AppSettingsService } from '../services/app-settings.service';

@Component({
  selector: 'app-news-country',
  templateUrl: './news-country.component.html',
  styleUrls: ['./news-country.component.css']
})
export class NewsCountryComponent implements OnInit, OnChanges {
  @Input() countrySelected: string;
  @Output()
  countrySelectedChange: EventEmitter<string>;
  selectedCountry;
  countries;

  constructor(private appSettingService: AppSettingsService) {
    this.countrySelectedChange = new EventEmitter<string>();
  }

  ngOnInit() {
    this.appSettingService.getNewsCountries().subscribe(data => {
      this.countries = data;
    });

    this.selectedCountry = '';
  }

  ngOnChanges() {
    this.selectedCountry = this.countrySelected;
  }

  selected() {
    this.countrySelectedChange.emit(this.selectedCountry);
  }
}
