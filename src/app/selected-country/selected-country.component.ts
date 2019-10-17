import { Component, OnInit, Input } from '@angular/core';
import { AppSettingsService } from '../services/app-settings.service';
import { Utility } from '../utility';

@Component({
  selector: 'app-selected-country',
  templateUrl: './selected-country.component.html',
  styleUrls: ['./selected-country.component.css']
})
export class SelectedCountryComponent implements OnInit {
  @Input() countryCode: string;
  countryName: string;

  constructor(private appSettingsService: AppSettingsService) {}

  ngOnInit() {
    this.appSettingsService.getNewsCountries().subscribe(data => {
      this.countryName = Utility.getCountryNameFromCode(this.countryCode, data);
    });
  }
}
