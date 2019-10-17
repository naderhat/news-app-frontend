import {
  Component,
  OnInit,
  OnChanges,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { AppSettingsService } from '../services/app-settings.service';
import { Utility } from '../utility';
import { Observable } from 'rxjs';
import { Country } from '../country';

@Component({
  selector: 'app-selected-items',
  templateUrl: './selected-items.component.html',
  styleUrls: ['./selected-items.component.css']
})
export class SelectedItemsComponent implements OnInit, OnChanges {
  @Input() items: Array<Country>;

  constructor(private appSettingsService: AppSettingsService) {}

  ngOnInit() {}

  ngOnChanges() {}

  /* getCountryNameFromCode(code: string): Observable<string> {
    this.appSettingsService.getNewsCountries().subscribe(data => {
      const countryName = Utility.getCountryNameFromCode(code, data);
      console.log(countryName);
      return countryName;
    });
  } */
}
